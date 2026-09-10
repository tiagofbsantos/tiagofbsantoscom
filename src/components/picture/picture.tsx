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
  sizes?: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
  srcSet?: string;
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
  sizes,
  avifSrcSet,
  webpSrcSet,
  srcSet,
}: PictureProps) {
  const img = (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
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
      {avif && (
        <source
          type="image/avif"
          srcSet={avifSrcSet ?? avif}
          sizes={avifSrcSet ? sizes : undefined}
        />
      )}
      {webp && (
        <source
          type="image/webp"
          srcSet={webpSrcSet ?? webp}
          sizes={webpSrcSet ? sizes : undefined}
        />
      )}
      {img}
    </picture>
  );
}
