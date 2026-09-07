import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
};

export default function ExternalLink({
  href,
  className,
  children,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      {...rest}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
