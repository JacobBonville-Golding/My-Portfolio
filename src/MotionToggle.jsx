function MotionToggle({ motionEnabled, onToggle, variant = "floating" }) {
  const action = motionEnabled ? "Pause" : "Play";
  const state = motionEnabled ? "On" : "Off";

  return (
    <button
      className={`motion-toggle motion-toggle--${variant}`}
      type="button"
      onClick={onToggle}
      aria-label={variant === "menu" ? undefined : "Decorative animation"}
      aria-pressed={motionEnabled}
      title={`${action} decorative animation`}
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
      {variant === "menu" && <span>Decorative animation: {state}</span>}
    </button>
  );
}

export default MotionToggle;
