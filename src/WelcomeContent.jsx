import blackCat from "./media/cats/sitting-cat-black.png";
import whiteCat from "./media/cats/sitting-cat-white-clean.png";
import stebanPhoto from "./media/cats/steban-480.webp";
import stebanPhotoLarge from "./media/cats/steban-960.webp";
import "./styles/welcome.css";

function SittingCat({ color, src }) {
  return (
    <figure className={`sitting-cat sitting-cat--${color}`}>
      <img 
      src={src} 
      alt="" 
      draggable="false" 
      />
      <span className="tracking-eye tracking-eye--left">
        <i />
      </span>
      <span className="tracking-eye tracking-eye--right">
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