import { useEffect, useState } from "react";

import bgDesktop from "../assets/pattern-bg-desktop.png";
import bgMobile from "../assets/pattern-bg-mobile.png";

const Background = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [bgImg, setBgImg] = useState<string>("");
  const isMobile = screenWidth < 768;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setBgImg(bgMobile);
    } else {
      setBgImg(bgDesktop);
    }
  }, [isMobile]);

  return (
    <img
      src={bgImg}
      className="w-full h-[350px] md:h-[270px] block"
      alt="background"
    />
  );
};

export default Background;
