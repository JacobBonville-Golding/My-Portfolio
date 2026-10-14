function MotionToggle({ motionEnabled, onToggle, variant = "floating" }) {
  const action = motionEnabled ? "Pause" : "Play";

  return (
    <button
      className={`motion-toggle motion-toggle--${variant}`}
      type="button"
      onClick={onToggle}
      aria-label={`${action} background animation`}
      aria-pressed={motionEnabled}
      title={`${action} background animation`}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        {motionEnabled ? (
          <>
            <rect x="28" y="24" width="14" height="52" rx="4" />
            <rect x="58" y="24" width="14" height="52" rx="4" />
          </>
        ) : (
          <path d="M34 24 76 50 34 76Z" />
        )}
      </svg>
      {variant === "menu" && <span>{action} background animation</span>}
    </button>
  );
}

export default MotionToggle;
