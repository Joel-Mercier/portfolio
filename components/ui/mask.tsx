import { useMouse } from "@/utils/hooks/use-mouse";
import { useEffect } from "react";

const Mask = () => {
  const { state: mouse, ref } = useMouse();
  useEffect(() => {
    let x = (mouse.x / window.innerWidth) * 100;
    let y = (mouse.y / window.innerHeight) * 100;
    ref.current?.style.setProperty("--mouse-x", x + "%");
    ref.current?.style.setProperty("--mouse-y", y + "%");
  }, [mouse, ref]);

  return (
    <div
      ref={ref}
      className="mask pointer-events-none fixed inset-0 z-30 transition duration-300 w-screen h-screen"
    ></div>
  );
};

export default Mask;
