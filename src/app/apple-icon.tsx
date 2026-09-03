import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: "linear-gradient(135deg, #0D1929 0%, #1B365D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          borderRadius: "36px",
          border: "5px solid #D4AF37",
          fontWeight: 800,
          fontFamily: "serif",
          letterSpacing: "-2px",
        }}
      >
        SR
      </div>
    ),
    {
      ...size,
    }
  );
}
