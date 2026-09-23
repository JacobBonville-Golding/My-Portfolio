import { useEffect, useRef, useState } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "Olá",
  "Hej",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
  "Hello",
];

function GreetingTitle() {
  const textRef = useRef(null);
  const timerRef = useRef(null);
  const finishedRef = useRef(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactScreen = window.matchMedia(
      "(max-width: 1023px), (max-height: 700px)",
    );

    let stopped = false;

    function stop() {
      stopped = true;
      window.clearTimeout(timerRef.current);
    }

    function start() {
      stop();
      stopped = false;

      if (!textRef.current) return;

      if (finishedRef.current || reducedMotion.matches || compactScreen.matches) {
        textRef.current.textContent = "Hello";
        setRunning(false);
        return;
      }

      textRef.current.textContent = "";
      setRunning(true);

      let languageIndex = 0;
      let characterIndex = 0;

      function schedule(callback, delay) {
        timerRef.current = window.setTimeout(callback, delay);
      }

      function typeNext() {
        if (stopped || finishedRef.current) return;

        const characters = Array.from(greetings[languageIndex]);

        if (characterIndex < characters.length) {
          characterIndex += 1;
          textRef.current.textContent = characters.slice(0, characterIndex).join("");
          schedule(typeNext, 72);
        } else if (languageIndex === greetings.length - 1) {
          finishedRef.current = true;
          setRunning(false);
        } else {
          schedule(eraseNext, 1200);
        }
      }

      function eraseNext() {
        if (stopped || finishedRef.current) return;

        characterIndex -= 1;
        const characters = Array.from(greetings[languageIndex]);
        textRef.current.textContent = characters.slice(0, characterIndex).join("");

        if (characterIndex > 0) {
          schedule(eraseNext, 42);
        } else {
          languageIndex += 1;
          schedule(typeNext, 72);
        }
      }

      schedule(typeNext, 300);
    }

    reducedMotion.addEventListener("change", start);
    compactScreen.addEventListener("change", start);
    start();

    return () => {
      stop();
      reducedMotion.removeEventListener("change", start);
      compactScreen.removeEventListener("change", start);
    };
  }, []);

  function skipGreetings() {
    finishedRef.current = true;
    window.clearTimeout(timerRef.current);
    if (textRef.current) textRef.current.textContent = "Hello";
    setRunning(false);
  }

  return (
    <>
      <h1 id="slide-title" className="greeting-title">
        <span className="screen-reader-only">
          Hello and welcome to Jake&apos;s portfolio
        </span>
        <span ref={textRef} aria-hidden="true">Hello</span>
      </h1>

      {running && (
        <button type="button" className="skip-greeting" onClick={skipGreetings}>
          Skip greetings
        </button>
      )}
    </>
  );
}

export default GreetingTitle;