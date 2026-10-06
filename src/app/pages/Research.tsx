import { PageHero } from "../components/Primitives"
import { images, researchNotebooks } from "../data/content"

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Pesquisa · 03"
        title={
          <>
            O futuro é uma
            <br />
            prática do <em>presente.</em>
          </>
        }
        intro="Pesquisar amplia as possibilidades da arquitetura e mantém a tecnologia a serviço do projeto."
        image={images.research.src}
        imageAlt={images.research.alt}
      />
      <section className="research-intro section">
        <h2>
          Testar. Medir.
          <br />
          Habitar. Aprender.
        </h2>
        <p>
          Investigamos processos, componentes e formas de acompanhamento que
          tornem a habitação mais adaptável, eficiente e duradoura. Cada
          descoberta retorna ao projeto.
        </p>
      </section>
      <section className="notebooks section">
        {researchNotebooks.map(({ index, title, text }) => (
          <article key={index}>
            <span>{index}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <small>Pesquisa aberta · 2026</small>
          </article>
        ))}
      </section>
    </>
  )
}
