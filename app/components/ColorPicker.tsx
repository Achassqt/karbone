"use client";

import { useEffect, useState } from "react";

export default function ColorPicker() {
  // const [color, setColor] = useState("#d6ff3f");
  const [color, setColor] = useState("#efcaff");

  useEffect(() => {
    document.documentElement.style.setProperty("--color-neon", color);
  }, [color]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        padding: "5px",
        backgroundColor: "var(--color-black)",
        borderRadius: "20px",
        border: "1px solid var(--color-white)",
      }}
    > 
      <div style={{ position: "relative", width: "30px", height: "30px" }}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "50%",
          }}
        />
        {/* Ce petit cercle permet de masquer le design natif moche de l'input color */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: color,
            border: "2px solid white",
            pointerEvents: "none", // Laisse passer le clic vers l'input en dessous
          }}
        />
      </div>
    </div>
  );
}