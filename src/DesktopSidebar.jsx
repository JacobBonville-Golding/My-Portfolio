import catLogo from "./media/cats/cat-white.png";
import blackCatLogo from "./media/cats/cat-black.png";

function PawStamp({ x, y, angle }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(1.5)`}>
      <ellipse cx="-11" cy="-10" rx="3.4" ry="5.1" />
      <ellipse cx="-4" cy="-15" rx="3.5" ry="5.2" />
      <ellipse cx="4" cy="-15" rx="3.5" ry="5.2" />
      <ellipse cx="11" cy="-10" rx="3.4" ry="5.1" />
      <path d="M-10 11C-13 7-11 2-7-1C-5-3-2-4 0-4C2-4 5-3 7-1C11 2 13 7 10 11C8 14 5 14 2 12C1 12-1 12-2 12C-5 14-8 14-10 11Z" />
    </g>
  );
}

function DesktopSidebar({ slides, activeIndex, onSelect, theme }) {
    return (
        <aside className="desktop-sidebar" aria-label="Portfolio sidebar">
            <button
                className="sidebar-home"
                type="button"
                aria-label="Go to welcome slide"
                onClick={() => onSelect(0)}
            >
                <img src={theme === "dark" ? catLogo : blackCatLogo} alt="" />
            </button>

            <div className="sidebar-name" aria-hidden="true">JAKE</div>

            <nav className="paw-navigation" aria-label="Portfolio slides">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className="paw-button"
                        type="button"
                        aria-label={`Go to slide ${String(index).padStart(2, "0")}: ${slide.navLabel}`}
                        aria-current={index === activeIndex ? "page" : undefined}
                        onClick={() => onSelect(index)}
                    >
                        <svg viewBox="0 0 160 180" aria-hidden="true" focusable="false">
                        {index % 2 === 0 ? (
                            <>
                            <PawStamp x={120} y={34} angle={-9} />
                            <PawStamp x={40} y={90} angle={8} />
                            <PawStamp x={116} y={152} angle={-7} />
                            </>
                        ) : (
                            <>
                            <PawStamp x={40} y={34} angle={9} />
                            <PawStamp x={120} y={90} angle={-8} />
                            <PawStamp x={40} y={152} angle={7} />
                            </>
                        )}
                        </svg>
                        <span className="paw-label" aria-hidden="true">
                        {slide.navLabel}
                        </span>
                    </button>
                ))}
            </nav>
            
            <button
                className="behind-button"
                type="button"
                onClick={() => onSelect(4)}
            >
                Behind the Work
            </button>

            <footer className="sidebar-footer">
                <a 
                href="https://github.com/JacobBonville-Golding?tab=repositories"
                target="_blank"
                rel="noreferrer"
                >
                    GitHub
                </a>
                <small>© {new Date().getFullYear()} Jacob Bonville-Golding</small>
            </footer>
        </aside>
    );
}

export default DesktopSidebar;