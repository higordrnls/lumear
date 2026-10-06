import { TextLink } from "../components/Primitives"

export default function NotFound() {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>Este espaço ainda está por vir.</h1>
      <TextLink to="/">Voltar ao início</TextLink>
    </section>
  )
}
