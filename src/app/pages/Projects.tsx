import { PageHero } from "../components/Primitives"
import { studies } from "../data/content"

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projetos · 04"
        title={
          <>
            Um campo para
            <br />
            <em>investigações.</em>
          </>
        }
        intro="A Lumear é um projeto conceitual. Todos os trabalhos abaixo são estudos autorais e protótipos em desenvolvimento."
      />
      <section className="project-list section">
        {studies.map((study) => (
          <article className="project" key={study.id}>
            <div className="project-image">
              <img src={study.image.src} alt={study.image.alt} loading="lazy" />
              <span>{study.id}</span>
            </div>
            <div className="project-copy">
              <p>{study.type}</p>
              <h2>{study.title}</h2>
              <span>{study.text}</span>
              <div className="project-status">
                {study.status} <span aria-hidden="true">—</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
