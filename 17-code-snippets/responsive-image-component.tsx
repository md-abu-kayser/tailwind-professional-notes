interface Props {
  src: string;
  alt: string;
  className?: string;
}
export function ResponsiveImage({ src, alt, className }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-auto object-cover", className)}
      loading="lazy"
    />
  );
}
