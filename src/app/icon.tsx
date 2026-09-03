import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "linear-gradient(135deg, #0D1929 0%, #1B365D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          borderRadius: "50%",
          border: "2px solid #D4AF37",
          fontWeight: 800,
          fontFamily: "serif",
          letterSpacing: "-0.5px",
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
