import { useState } from "react";

function PortfolioImage({ src, srcSet, sizes, alt }) {
  const [failedSrc, setFailedSrc] = useState(null);

  if (failedSrc === src) {
    return (
      <div
        className="image-fallback"
        role="img"
        aria-label={`Image unavailable. ${alt}`}
      >
        <span aria-hidden="true">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailedSrc(src)}
    />
  );
}

export default PortfolioImage;