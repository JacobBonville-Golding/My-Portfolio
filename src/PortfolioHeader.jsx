import { useState } from "react";
import catLogo from "./media/cats/cat-white.png";
import blackCatLogo from "./media/cats/cat-black.png";
import ThemeToggle from "./ThemeToggle.jsx";

function PortfolioHeader({ slides, activeIndex, onSelect, theme, onThemeToggle }) {
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
                <img src={theme === "dark" ? catLogo : blackCatLogo} alt="" />
            </button>

            <span className="header-name">JAKE</span>

            <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close slide menu" : "Open slide menu"}
            aria-expanded={menuOpen}
            aria-controls="slide-menu"
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
                <ThemeToggle
                    variant="menu"
                    theme={theme}
                    onToggle={() => {
                        onThemeToggle();
                        setMenuOpen(false);
                    }}
                />
            </nav>
        </header>
    );
}

export default PortfolioHeader;