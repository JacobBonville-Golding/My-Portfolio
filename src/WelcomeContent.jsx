import { useEffect, useRef } from "react";
import blackCat from "./media/cats/sitting-cat-black.png";
import whiteCat from "./media/cats/sitting-cat-white-clean.png";
import stebanPhoto from "./media/cats/steban-480.webp";
import stebanPhotoLarge from "./media/cats/steban-960.webp";

function SittingCat({ color, src }) {
  const eyesRef = useRef([]);

  useEffect(() => {
    const stillEyes = window.matchMedia(
      "(max-width: 760px), (max-height: 700px), (prefers-reduced-motion: reduce)",
    );

    function centerEyes() {
      eyesRef.current.forEach((eye) => {
        if (!eye) return;
        eye.style.setProperty("--pupil-x", "0px");
        eye.style.setProperty("--pupil-y", "0px");
      });
    }

    function followPointer(event) {
      eyesRef.current.forEach((eye) => {
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const deltaX = event.clientX - (rect.left + rect.width / 2);
        const deltaY = event.clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(deltaY, deltaX);
        const maximum = Math.min(rect.width, rect.height) * 0.1;
        const distance = Math.min(maximum, Math.hypot(deltaX, deltaY) * 0.035);

        eye.style.setProperty("--pupil-x", `${Math.cos(angle) * distance}px`);
        eye.style.setProperty("--pupil-y", `${Math.sin(angle) * distance}px`);
      });
    }

    function updateTracking() {
      window.removeEventListener("pointermove", followPointer);
      centerEyes();

      if (!stillEyes.matches) {
        window.addEventListener("pointermove", followPointer, { passive: true });
      }
    }

    stillEyes.addEventListener("change", updateTracking);
    window.addEventListener("blur", centerEyes);
    updateTracking();

    return () => {
      stillEyes.removeEventListener("change", updateTracking);
      window.removeEventListener("pointermove", followPointer);
      window.removeEventListener("blur", centerEyes);
    };
  }, []);

  return (
    <figure className={`sitting-cat sitting-cat--${color}`}>
      <img src={src} alt="" draggable="false" />
      <span
        className="tracking-eye tracking-eye--left"
        ref={(node) => { eyesRef.current[0] = node; }}
      >
        <i />
      </span>
      <span
        className="tracking-eye tracking-eye--right"
        ref={(node) => { eyesRef.current[1] = node; }}
      >
        <i />
      </span>
    </figure>
  );
}

function WelcomeContent({ introduction }) {
  return (
    <div className="welcome-content">
      <p className="screen-reader-only">{introduction}</p>

      <div className="welcome-cats" aria-hidden="true">
        <SittingCat color="black" src={blackCat} />
        <SittingCat color="white" src={whiteCat} />
      </div>

      <div className="welcome-fallback-photo" aria-hidden="true">
        <img
          src={stebanPhoto}
          srcSet={`${stebanPhoto} 480w, ${stebanPhotoLarge} 960w`}
          sizes="100vw"
          alt=""
          decoding="async"
        />
      </div>
    </div>
  );
}

export default WelcomeContent;