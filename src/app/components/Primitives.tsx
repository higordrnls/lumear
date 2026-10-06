import { ReactNode } from "react"
import { Link } from "react-router"

export function Arrow() {
  return <span aria-hidden="true">↗</span>
}

type TextLinkProps = {
  to: string
  children: ReactNode
}

export function TextLink({ to, children }: TextLinkProps) {
  return (
    <Link className="text-link" to={to}>
      <span>{children}</span>
      <Arrow />
    </Link>
  )
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>
  )
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`wordmark-svg ${className}`}
      viewBox="0 0 365 64"
      role="img"
      aria-label="Lumear"
    >
      <path d="M10 8v46h38" />
      <path d="M62 8v29c0 13 8 19 20 19s20-6 20-19V8" />
      <path d="M120 55V9l22 31 22-31v46" />
      <path d="M220 9h-38v46h40M183 31h31" />
      <path d="m236 55 20-47 21 47M243 39h27" />
      <path d="M294 55V9h21c13 0 21 7 21 17s-8 17-21 17h-20M317 43l22 12" />
    </svg>
  )
}

export function StrataTexture({ light = false }: { light?: boolean }) {
  return (
    <svg
      className={`strata${light ? " strata--light" : ""}`}
      viewBox="0 0 400 112"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M0 8c58 5 103-5 162 0 68 6 145-5 238 1" />
      <path d="M0 23c72-6 117 6 196 0 73-5 123 5 204-1" />
      <path d="M0 39c49 5 119-5 181 0 70 6 145-4 219 1" />
      <path d="M0 55c80-4 126 5 208 0 67-4 117 4 192-1" />
      <path d="M0 71c54 5 112-5 179 0 73 5 141-5 221 0" />
      <path d="M0 87c66-5 118 6 195 0 77-6 123 5 205 0" />
      <path d="M0 103c59 4 106-4 167 0 71 5 151-4 233 0" />
    </svg>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: ReactNode
  intro: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className={`page-hero${image ? " page-hero--image" : ""}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Reveal>
          <h1>{title}</h1>
        </Reveal>
        <p>{intro}</p>
      </div>
      {image && <img src={image} alt={imageAlt ?? ""} />}
    </section>
  )
}

export function Quote({ text }: { text: string }) {
  return (
    <section className="quote section">
      <span aria-hidden="true">“</span>
      <Reveal>
        <blockquote>{text}</blockquote>
      </Reveal>
    </section>
  )
}
