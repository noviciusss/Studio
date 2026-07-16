import React from "react";

/**
 * Centered container with responsive horizontal padding.
 * Uses inline styles to guarantee centering regardless of
 * Tailwind v4 / Turbopack CSS-class loading behavior.
 */
export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      style={{
        maxWidth: wide ? "1400px" : "1240px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
