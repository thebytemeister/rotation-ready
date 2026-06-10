/* ============================================================
   RotationReady — rotation manifest
   Add a new rotation here, then create its data files in a
   matching folder under /data. See README.md for a copy-paste
   prompt that generates a whole new rotation for you.
   ============================================================ */
window.STUDY_MANIFEST = {
  rotations: [
    {
      id: "womens-health",
      name: "Women's Health",
      icon: "🌸",
      accent: "#e84d8a",
      accent2: "#8e54e9",
      files: [
        "womens-health/module.js",
        "womens-health/flashcards.js",
        "womens-health/questions-1.js",
        "womens-health/questions-2.js"
      ]
    }
    /* Next rotation goes here, e.g.:
    {
      id: "pediatrics",
      name: "Pediatrics",
      icon: "🧸",
      accent: "#2e9be6",
      accent2: "#7bd389",
      files: ["pediatrics/module.js", "pediatrics/flashcards.js", "pediatrics/questions-1.js"]
    }
    */
  ]
};
