import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { slides } from "./portfolioData.js";
import { aboutImages, projectImages } from "./imageData.js";
import PortfolioHeader from "./PortfolioHeader.jsx";
import DesktopSidebar from "./DesktopSidebar.jsx";
import WelcomeContent from "./WelcomeContent.jsx";
import GreetingTitle from "./GreetingTitle.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import MotionToggle from "./MotionToggle.jsx";
import PawCursor from "./PawCursor.jsx";
import PortfolioImage from "./PortfolioImage.jsx";
import "./styles.scss";

function ProjectPreview({ slide }) {
  const image = projectImages[slide.id];

  if (!image) return null;

  return (
    <figure className="project-preview">
      <PortfolioImage
        src={image.small}
        srcSet={`${image.small} 480w, ${image.large} 960w`}
        sizes="(max-width: 600px) 90vw, 480px"
        alt={`${slide.title} homepage presented in a device mockup`}
      />
    </figure>
  );
}

function ProjectDetails({ slide }) {
  const hasPreview = Boolean(projectImages[slide.id]);

  return (
    <div
      className={hasPreview ? "project-layout" : "project-layout project-layout--text-only"}
    >
      <div className="project-copy">
        <p className="tagline">{slide.tagline}</p>
        <p>{slide.summary}</p>

        {slide.accessibilityFeatures ? (
          <section className="accessibility-features">
            <h2>Accessibility built in</h2>
            <div className="accessibility-feature-grid">
              {slide.accessibilityFeatures.map((feature) => (
                <article key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <h2>What I contributed</h2>
            <ul>
              {slide.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {slide.takeaway && (
          <section>
            <h2>The takeaway</h2>
            <p>{slide.takeaway}</p>
          </section>
        )}

        {slide.tools?.length > 0 && (
          <section>
            <h2>Built with</h2>
            <ul className="tool-list">
              {slide.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
        )}

        {slide.credit && <p>{slide.credit}</p>}

        {slide.links?.length > 0 && (
          <div className="project-links">
            {slide.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {hasPreview && (
        <div className="project-side">
          <ProjectPreview slide={slide} />
        </div>
      )}
    </div>
  );
}

function AboutPhotos() {
  return (
    <div className="about-photos" aria-label="Jake and his cats">
      {aboutImages.map((image) => (
        <figure key={image.caption}>
          <PortfolioImage
            src={image.small}
            srcSet={`${image.small} 480w, ${image.large} 960w`}
            sizes="(max-width: 600px) 90vw, 400px"
            alt={image.alt}
          />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function AboutDetails({ slide }) {
  return (
    <div className="project-layout">
      <div className="project-copy">
        <p className="tagline">{slide.tagline}</p>
        <p>{slide.summary}</p>

        <section>
          <h2>Meet the creative directors</h2>
          <p>{slide.directors}</p>
        </section>

        <section>
          <h2>Quick facts</h2>
          <ul>
            {slide.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </section>
      </div>

      <AboutPhotos />
    </div>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(() => {
    const saved = window.localStorage.getItem("portfolio-motion");
    if (saved === "on") return true;
    if (saved === "off") return false;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [theme, setTheme] = useState(() => {
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
});

useEffect(() => {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("portfolio-theme", theme);
}, [theme]);

useEffect(() => {
  document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
}, [motionEnabled]);

useEffect(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function followSystemMotionPreference(event) {
    if (window.localStorage.getItem("portfolio-motion") === null) {
      setMotionEnabled(!event.matches);
    }
  }

  reducedMotion.addEventListener("change", followSystemMotionPreference);
  return () => {
    reducedMotion.removeEventListener("change", followSystemMotionPreference);
  };
}, []);

function toggleTheme() {
  setTheme((current) => (current === "dark" ? "light" : "dark"));
}

function toggleMotion() {
  setMotionEnabled((enabled) => {
    const nextValue = !enabled;
    window.localStorage.setItem(
      "portfolio-motion",
      nextValue ? "on" : "off",
    );
    return nextValue;
  });
}
  const slide = slides[activeIndex];

  return (
    <>
    <div className="animated-background" aria-hidden="true" />
    <div className="site-shell">
    <PawCursor theme={theme} />
    <DesktopSidebar
      slides={slides}
      activeIndex={activeIndex}
      onSelect={setActiveIndex}
      theme={theme}
    />
    <PortfolioHeader
      slides={slides}
      activeIndex={activeIndex}
      onSelect={setActiveIndex}
      theme={theme}
      onThemeToggle={toggleTheme}
      motionEnabled={motionEnabled}
      onMotionToggle={toggleMotion}
    />

      <main className="page">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <MotionToggle
          motionEnabled={motionEnabled}
          onToggle={toggleMotion}
        />
        <div className="frame-stack">
          <article className="project-frame" aria-labelledby="slide-title">
            {slide.id === "welcome" ? (
              <GreetingTitle />
            ) : (
              <h1 id="slide-title">{slide.title}</h1>
            )}

            <div
              className={slide.id === "welcome" ? "project-card welcome-card" : "project-card"}
              role="region"
              aria-label={`${slide.title} details`}
              tabIndex={0}
            >
              {slide.id === "welcome" && (
                <WelcomeContent introduction={slide.introduction} />
              )}
              {slide.id === "about" && <AboutDetails slide={slide} />}
              {slide.id !== "welcome" && slide.id !== "about" && (
                <ProjectDetails slide={slide} />
              )}
            </div>
          </article>
        </div>
      </main>

      <nav className="step-nav" aria-label="Previous and next slide">
        <button
          type="button"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          Previous
        </button>

        <span aria-live="polite">
          {String(activeIndex).padStart(2, "0")} /{" "}
          {String(slides.length - 1).padStart(2, "0")}
        </span>

        <button
          type="button"
          disabled={activeIndex === slides.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          Next
        </button>
      </nav>
    </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
