/*
 * React adaptation of “Lend a Cat Paw cursor” by Codfish Lin.
 * https://gitlab.com/side_project/chill-component/-/tree/main/src/components/cursor-lend-a-paw
 * Copyright (c) 2024-PRESENT Codfish Lin — MIT License.
 */
import { useEffect, useRef, useState } from "react";
import Zdog from "zdog";

const hiddenCursor =
  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAKSURBVHicY2QAAAAEAAIhZK1qAAAAAElFTkSuQmCC'), auto";

function cursorStatus(target, pressed) {
  if (pressed) return "pressed";
  if (!(target instanceof Element)) return "default";

  const value = window.getComputedStyle(target).cursor;
  if (value === "not-allowed") return "not-allowed";
  if (value === "pointer" || target.closest("a, button, [role='button']")) {
    return "pointer";
  }
  return "default";
}

function PawCursor({ size = 46, theme = "light" }) {
  const svgRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const previous = useRef({ x: -100, y: -100 });
  const pressed = useRef(false);
  const status = useRef("default");
  const frame = useRef(null);
  const [laser, setLaser] = useState({ x: -100, y: -100, status: "default" });
  const [prints, setPrints] = useState([]);
  const [motionDisabled, setMotionDisabled] = useState(() =>
    window.matchMedia("(max-width: 760px), (max-height: 500px), (pointer: coarse), (prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionQuery = window.matchMedia(
      "(max-width: 760px), (max-height: 500px), (pointer: coarse), (prefers-reduced-motion: reduce)"
    );

    function updateMotion() {
      setMotionDisabled(motionQuery.matches);

      if (motionQuery.matches) {
        setLaser({ x: -100, y: -100, status: "default" });
        setPrints([]);
      }
    }

    motionQuery.addEventListener("change", updateMotion);
    updateMotion();

    return () => motionQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || motionDisabled) return undefined;

    const scale = (value) => value * (size / 80);
    const paw = new Zdog.Illustration({ element: svg });

    const arm = new Zdog.Shape({
      addTo: paw,
      stroke: scale(70),
      color: theme === "dark" ? "#f6f8fa" : "#25242b",
      path: [
        { y: scale(-40) },
        {
          bezier: [
            { y: scale(-20) },
            { y: scale(20) },
            { x: scale(10), y: scale(40) },
          ],
        },
      ],
    });

    [
      [0, -10, 45, 40],
      [0, -13, 35, 40],
      [20, -40, 10, 20],
      [8, -50, 10, 20],
      [-8, -50, 10, 20],
      [-20, -40, 10, 20],
    ].forEach(([x, y, width, height]) => {
      new Zdog.Hemisphere({
        addTo: paw,
        translate: { x: scale(x), y: scale(y), z: scale(38) },
        diameter: 0,
        stroke: 0,
        color: "#f39aaa",
        width: scale(width),
        height: scale(height),
      });
    });

    const oldCursor = document.body.style.cursor;
    document.body.style.cursor = hiddenCursor;

    function animate() {
      const current = mouse.current;
      const speed = Math.max(
        -0.35,
        Math.min(0.35, (current.x - previous.current.x) / 45),
      );

      let offsetX = 60;
      let offsetY = 30;
      let armEnd = scale(10);
      let roll = Math.PI / 10 - speed;
      let yaw = Math.PI / 20 + speed;

      if (status.current === "pointer") {
        offsetX = 90;
        offsetY = -45;
        armEnd = scale(20);
        roll = Math.PI / 6;
        yaw = Math.PI / 6;
      } else if (status.current === "pressed") {
        offsetX = 0;
        offsetY = 15;
        armEnd = scale(-30);
        roll = Math.PI;
        yaw = -Math.PI / 20;
      } else if (status.current === "not-allowed") {
        offsetX = 0;
        offsetY = scale(20);
        armEnd = scale(-20);
        roll = Math.PI * 1.98;
        yaw = Math.PI / 100;
      }

      svg.style.transform =
        `translate3d(${current.x - size + offsetX}px, ` +
        `${current.y - size + offsetY}px, 0) rotate(${yaw}rad)`;

      paw.rotate.y += (roll - paw.rotate.y) * 0.18;
      arm.path = [
        { y: scale(-40) },
        {
          bezier: [
            { y: scale(-20) },
            { y: scale(20) },
            { x: armEnd, y: scale(40) },
          ],
        },
      ];
      arm.updatePath();
      paw.updateRenderGraph();

      previous.current = { ...current };
      frame.current = requestAnimationFrame(animate);
    }

    function move(event) {
      mouse.current = { x: event.clientX, y: event.clientY };
      status.current = cursorStatus(event.target, pressed.current);
      setLaser({ x: event.clientX, y: event.clientY, status: status.current });
    }

    function down(event) {
      if (event.pointerType === "touch") return;

      pressed.current = true;
      status.current = "pressed";

      const id = `${Date.now()}-${Math.random()}`;
      setPrints((items) => [...items, { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(
        () => setPrints((items) => items.filter((item) => item.id !== id)),
        3600,
      );
    }

    function up(event) {
      pressed.current = false;
      status.current = cursorStatus(event.target, false);
    }

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    frame.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = oldCursor;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      cancelAnimationFrame(frame.current);
      paw.remove();
    };
  }, [size, theme, motionDisabled]);

  if (motionDisabled) return null;

  return (
    <>
      <span
        className={`paw-laser paw-laser--${laser.status}`}
        style={{ left: laser.x, top: laser.y }}
        aria-hidden="true"
      />
      <svg
        ref={svgRef}
        className="paw-follower"
        width={size * 2}
        height={size * 2}
        aria-hidden="true"
      />
      {prints.map(({ id, x, y }) => (
        <span
          className="paw-print"
          key={id}
          style={{ left: x, top: y }}
          aria-hidden="true"
        >
          <i className="toe toe-1" />
          <i className="toe toe-2" />
          <i className="toe toe-3" />
          <i className="toe toe-4" />
          <i className="main-pad" />
        </span>
      ))}
    </>
  );
}

export default PawCursor;