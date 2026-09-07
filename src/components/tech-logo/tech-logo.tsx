import ExternalLink from "../external-link/external-link";

type TechLogoProps = {
  href: string;
  src: string;
  label: string;
};

export default function TechLogo({ href, src, label }: TechLogoProps) {
  return (
    <ExternalLink href={href} aria-label={label}>
      <img
        src={src}
        alt=""
        width={90}
        height={90}
        loading="lazy"
        decoding="async"
      />
    </ExternalLink>
  );
}
