import Image from "next/image";

/**
 * Renders a custom icon from /public/icons. Replace the SVG file to update the icon.
 */
export default function IconPlaceholder({
  src = "/icons/placeholder.svg",
  alt = "Icon placeholder",
  width = 40,
  height = 40,
  className = "object-contain",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
