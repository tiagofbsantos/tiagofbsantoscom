type PictureProps = {
  avif?: string;
  webp?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export default function Picture({
  avif,
  webp,
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  fetchPriority,
}: PictureProps) {
  const img = (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  );

  if (!avif && !webp) {
    return img;
  }

  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} />}
      {webp && <source type="image/webp" srcSet={webp} />}
      {img}
    </picture>
  );
}
