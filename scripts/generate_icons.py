"""Generate RotationReady PWA icons from icons/logo.svg (the Vizsla mascot).

Pipeline: wrap the mascot SVG on the brand gradient, rasterize at 512px with
headless Edge, then downscale with Pillow for the smaller sizes + favicon.ico.

Run from repo root:  python scripts/generate_icons.py
"""
import os
import re
import subprocess
import tempfile
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "icons"
LOGO = OUT / "logo.svg"

EDGE_CANDIDATES = [
    Path(os.environ.get("ProgramFiles(x86)", r"C:\Program Files (x86)")) / "Microsoft/Edge/Application/msedge.exe",
    Path(os.environ.get("ProgramFiles", r"C:\Program Files")) / "Microsoft/Edge/Application/msedge.exe",
]

GRADIENT = (
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#e84d8a"/><stop offset="1" stop-color="#8e54e9"/>'
    "</linearGradient></defs>"
    '<rect width="512" height="512" fill="url(#g)"/>'
)


def inner_logo() -> str:
    text = LOGO.read_text(encoding="utf-8")
    text = re.sub(r"^.*?<svg[^>]*>", "", text, flags=re.S)
    return text.replace("</svg>", "").strip()


def wrapper_svg(art_scale: float) -> str:
    side = round(512 * art_scale)
    offset = round((512 - side) / 2)
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">'
        + GRADIENT
        + f'<svg x="{offset}" y="{offset}" width="{side}" height="{side}" viewBox="0 0 512 512">'
        + inner_logo()
        + "</svg></svg>"
    )


def rasterize(svg_text: str, out_png: Path) -> None:
    edge = next((p for p in EDGE_CANDIDATES if p.exists()), None)
    if edge is None:
        raise SystemExit("Microsoft Edge not found — needed for SVG rasterization.")
    out_png.unlink(missing_ok=True)  # so a silent failure can't pass off stale output
    with tempfile.TemporaryDirectory() as td:
        svg_path = Path(td) / "icon.svg"
        svg_path.write_text(svg_text, encoding="utf-8")
        # isolated profile so Edge can't silently hand off to a running instance
        subprocess.run(
            [
                str(edge), "--headless=new", "--disable-gpu", "--hide-scrollbars",
                "--no-first-run", f"--user-data-dir={Path(td) / 'profile'}",
                "--force-device-scale-factor=1", "--window-size=512,512",
                f"--screenshot={out_png}", svg_path.as_uri(),
            ],
            check=True, capture_output=True, timeout=60,
        )
        if not out_png.exists() or out_png.stat().st_size < 5000:
            raise SystemExit(f"Rasterization produced no/suspect output for {out_png.name}")


def main() -> None:
    rasterize(wrapper_svg(0.82), OUT / "icon-512.png")
    rasterize(wrapper_svg(0.64), OUT / "icon-512-maskable.png")

    base = Image.open(OUT / "icon-512.png").convert("RGB")
    base.resize((192, 192), Image.LANCZOS).save(OUT / "icon-192.png")
    base.resize((180, 180), Image.LANCZOS).save(OUT / "apple-touch-icon.png")
    fav32 = base.resize((32, 32), Image.LANCZOS)
    fav32.save(OUT / "favicon-32.png")
    fav32.save(OUT / "favicon.ico", sizes=[(32, 32), (16, 16)])

    for f in sorted(OUT.glob("*")):
        print(f"  {f.name}  {f.stat().st_size} bytes")
    print("Icons regenerated from logo.svg")


if __name__ == "__main__":
    main()
