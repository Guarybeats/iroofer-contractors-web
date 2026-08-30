// Serves the WebP version of an /assets image to browsers that support it,
// with the JPG kept as the <img> fallback. Every /assets/*.jpg has a matching .webp.
// Asset URLs carry a ?v=N cache-buster: /assets/* is served immutable for a year,
// so bump the version everywhere when you replace an image file in place.
const NO_WEBP = [];

export default function Pic({ src, alt, className, style, loading = 'lazy', decoding = 'async', ...rest }) {
  const [path, query] = src.split('?');
  const webp = path.replace(/\.(jpe?g|png)$/i, '.webp') + (query ? `?${query}` : '');
  const hasWebp = webp !== src && !NO_WEBP.includes(path);
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
