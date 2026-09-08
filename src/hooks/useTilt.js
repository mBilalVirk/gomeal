import { useEffect, useRef, useState } from "react";

export function useTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: "rotateY(0deg) rotateX(0deg)",
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const handlePointerMove = (event) => {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      if (isTouchDevice) {
        setStyle({ transform: "rotateY(0deg) rotateX(0deg)" });
        return;
      }

      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      setStyle({
        transform: `rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`,
      });
    };

    const handlePointerLeave = () => {
      setStyle({ transform: "rotateY(0deg) rotateX(0deg)" });
    };

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return { ref, style };
}
