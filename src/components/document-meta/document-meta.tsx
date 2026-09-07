import { useLocation } from "react-router-dom";
import usePageMeta from "../../hooks/use-page-meta";
import { metaForPath } from "../../data/site";

export default function DocumentMeta() {
  const { pathname } = useLocation();
  usePageMeta(metaForPath(pathname));
  return null;
}
