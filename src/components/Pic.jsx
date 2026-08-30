// Serves the WebP version of an /assets image to browsers that support it,
// with the JPG kept as the <img> fallback. Every /assets/*.jpg has a matching
// .webp except team.jpg, which falls through to a plain <img>.
const NO_WEBP = [];

export default function Pic({ src, alt, className, style, loading = 'lazy', decoding = 'async', ...rest }) {
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const hasWebp = webp !== src && !NO_WEBP.includes(src);
  const img = (
    <img src={src} alt={alt} className={className} style={style} loading={loading} decoding={decoding} {...rest} />
  );
  if (!hasWebp) return img;
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      {img}
    </picture>
  );
}
