import { useState } from "react";
import catLogo from "./media/cats/cat-white.png";

function PortfolioHeader({ slides, activeIndex, onSelect }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function selectSlide(index) {
        onSelect(index);
        setMenuOpen(false);
    }

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    }

    return (
        <header className="portfolio-header" onKeyDown={handleKeyDown}>
            <button
                className="header-home"
                type="button"
                aria-label="Go to welcome slide"
                onClick={() => selectSlide(0)}
            >
                <img src={catLogo} alt="" />
            </button>

            <span className="header-name">JAKE</span>

            <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close slide menu" : "Open slide menu"}
            aria-expanded="slide-menu"
            onClick={() => setMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>

            <nav
                className="menu-panel"
                id="slide-menu"
                aria-label="Portfolio slides"
                hidden={!menuOpen}
            >
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        aria-current={index === activeIndex ? "page" : undefined}
                        onClick={() => selectSlide(index)}
                    >
                        <span>{String(index).padStart(2,"0")}</span>
                        <span>{slide.navLabel}</span>
                        {index === activeIndex && <span aria-hidden="true">✓</span>}
                    </button>
                ))}
            </nav>
        </header>
    );
}

export default PortfolioHeader;