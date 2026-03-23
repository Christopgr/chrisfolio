import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Chris Topalis — Software Engineer";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0b",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(108, 99, 255, 0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Top line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#8a8a96", fontSize: 20 }}>
            Software Engineer @ Wealthyhood
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: "#e8e8ed",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Chris Topalis
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 24,
            color: "#a89fff",
            margin: "16px 0 0 0",
            fontStyle: "italic",
          }}
        >
          Crafting Digital Experiences That Matter
        </p>

        {/* Skills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
          }}
        >
          {["TypeScript", "React", ".NET", "MongoDB"].map((skill) => (
            <span
              key={skill}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid #1e1e22",
                color: "#8a8a96",
                fontSize: 16,
                background: "#111113",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Domain */}
        <p
          style={{
            position: "absolute",
            bottom: 32,
            color: "#3a3a40",
            fontSize: 16,
          }}
        >
          christopalis.com
        </p>
      </div>
    ),
    { ...size }
  );
}
