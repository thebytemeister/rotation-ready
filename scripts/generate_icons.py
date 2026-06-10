"""Generate RotationReady PWA icons (run once; outputs to icons/)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "icons"
OUT.mkdir(exist_ok=True)

ACCENT = (232, 77, 138)
ACCENT2 = (142, 84, 233)
BG = (250, 247, 251)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient_bg(size):
    img = Image.new("RGB", (size, size), BG)
    draw = ImageDraw.Draw(img)
    for y in range(size):
        t = y / max(size - 1, 1)
        col = lerp(ACCENT, ACCENT2, 0.35 + 0.45 * t)
        draw.line([(0, y), (size, y)], fill=col)
    return img


def rounded_mask(size, radius_ratio=0.22):
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    r = int(size * radius_ratio)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=255)
    return mask


def draw_stethoscope(draw, size, cx, cy, scale):
    s = scale
    white = (255, 255, 255)
    shadow = (255, 255, 255, 90)

    # chest piece (dual circle)
    r1 = int(18 * s)
    r2 = int(12 * s)
    ox = int(8 * s)
    draw.ellipse([cx - r1 - ox, cy + int(30 * s) - r1, cx - r1 - ox + 2 * r1, cy + int(30 * s) + r1], fill=white)
    draw.ellipse([cx - r2 + ox, cy + int(30 * s) - r2, cx - r2 + ox + 2 * r2, cy + int(30 * s) + r2], fill=white)

    # tubing
    tube_w = max(3, int(7 * s))
    draw.line([(cx, cy - int(55 * s)), (cx, cy + int(18 * s))], fill=white, width=tube_w)
    draw.arc(
        [cx - int(42 * s), cy + int(8 * s), cx + int(42 * s), cy + int(52 * s)],
        start=0, end=180, fill=white, width=tube_w,
    )

    # earpieces
    ear_r = int(10 * s)
    lx = cx - int(36 * s)
    rx = cx + int(36 * s)
    ey = cy - int(48 * s)
    draw.ellipse([lx - ear_r, ey - ear_r, lx + ear_r, ey + ear_r], fill=white)
    draw.ellipse([rx - ear_r, ey - ear_r, rx + ear_r, ey + ear_r], fill=white)
    draw.line([(lx, ey), (cx - int(8 * s), cy - int(55 * s))], fill=white, width=max(2, int(5 * s)))
    draw.line([(rx, ey), (cx + int(8 * s), cy - int(55 * s))], fill=white, width=max(2, int(5 * s)))

    # highlight dot on chest piece
    dot = int(4 * s)
    draw.ellipse([cx - dot, cy + int(28 * s) - dot, cx + dot, cy + int(28 * s) + dot], fill=(255, 220, 235))


def render_icon(size, maskable=False):
    img = gradient_bg(size)
    if maskable:
        # safe-zone padding for adaptive icons (~20% inset)
        pad = int(size * 0.18)
        inner = size - 2 * pad
        overlay = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        odraw = ImageDraw.Draw(overlay)
        draw_stethoscope(odraw, inner, size // 2, size // 2 - int(pad * 0.15), inner / 512)
        img = img.convert("RGBA")
        img.paste(overlay, (0, 0), overlay)
    else:
        draw = ImageDraw.Draw(img)
        draw_stethoscope(draw, size, size // 2, size // 2 - int(size * 0.04), size / 512)

    mask = rounded_mask(size)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img.convert("RGBA"), (0, 0), mask)
    return out


def save_png(img, name):
    path = OUT / name
    img.save(path, "PNG", optimize=True)
    print(f"  {path.name} ({img.size[0]}x{img.size[1]})")


def main():
    print("Generating icons...")
    save_png(render_icon(512), "icon-512.png")
    save_png(render_icon(512, maskable=True), "icon-512-maskable.png")
    save_png(render_icon(192), "icon-192.png")
    save_png(render_icon(180), "apple-touch-icon.png")
    save_png(render_icon(32), "favicon-32.png")
    # multi-size .ico for legacy browsers
    fav = render_icon(32).resize((32, 32), Image.Resampling.LANCZOS)
    fav16 = fav.resize((16, 16), Image.Resampling.LANCZOS)
    fav.save(OUT / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32)])
    print(f"  favicon.ico")
    print("Done.")


if __name__ == "__main__":
    main()