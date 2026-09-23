function ThemeToggle({ theme, onToggle, variant = "paw" }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className={`theme-toggle theme-toggle--${variant}`}
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <ellipse cx="22" cy="36" rx="10" ry="14" transform="rotate(-28 22 36)" />
        <ellipse cx="41" cy="23" rx="9" ry="14" transform="rotate(-8 41 23)" />
        <ellipse cx="59" cy="23" rx="9" ry="14" transform="rotate(8 59 23)" />
        <ellipse cx="78" cy="36" rx="10" ry="14" transform="rotate(28 78 36)" />
        <path d="M20 68C20 56 29 48 40 40c6-4 14-4 20 0 11 8 20 16 20 28 0 15-10 24-23 19-5-2-9-2-14 0-13 5-23-4-23-19Z" />
      </svg>
      {variant === "menu" && <span>Switch to {nextTheme} mode</span>}
    </button>
  );
}

export default ThemeToggle;