import { ImageResponse } from "next/og";

export const dynamic = "force-static";
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
          background: "#f4f1ec",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
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
              background: "#b8332e",
            }}
          />
          <span
            style={{
              color: "#6e6260",
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Software Engineer · Athens
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 96,
            fontWeight: 500,
            color: "#141414",
            margin: 0,
            letterSpacing: "-0.04em",
          }}
        >
          Chris Topalis
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#b8332e",
            margin: "16px 0 0 0",
            fontStyle: "italic",
          }}
        >
          Building the web, end to end.
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
                border: "1px solid #d9d0ce",
                color: "#6e6360",
                fontSize: 16,
                background: "#ffffff",
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
            color: "#b5aaa7",
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
