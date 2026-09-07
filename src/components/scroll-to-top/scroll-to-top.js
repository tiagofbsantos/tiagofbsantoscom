import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
      };
      scroll();
      requestAnimationFrame(scroll);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
