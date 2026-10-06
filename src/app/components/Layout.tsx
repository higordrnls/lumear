import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import { navigation } from "../data/content"
import { Arrow, Wordmark } from "./Primitives"

function ScrollEffects() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const items = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.1 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`site-header${location.pathname === "/" ? " is-home" : ""}${
        scrolled ? " is-scrolled" : ""
      }${open ? " is-open" : ""}`}
    >
      <Link className="wordmark" to="/" aria-label="Lumear — início">
        <Wordmark />
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Fechar" : "Menu"}</span>
        <i />
      </button>
      <div className="mobile-menu" id="mobile-menu">
        <nav aria-label="Navegação móvel">
          {navigation.map(([label, to], index) => (
            <NavLink key={to} to={to}>
              <small>0{index + 1}</small>
              {label}
            </NavLink>
          ))}
        </nav>
        <p>Conceber, construir e acompanhar lugares para viver.</p>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-intro">
        <p>Uma empresa integrada para lugares que acolhem a vida.</p>
        <Link to="/contato">
          Começar uma conversa <Arrow />
        </Link>
      </div>
      <Wordmark className="footer-mark" />
      <div className="footer-meta">
        <span>Brasil · 2026</span>
        <span>Arquitetura · Habitação · Pesquisa</span>
        <span>Fotografias: Unsplash</span>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
