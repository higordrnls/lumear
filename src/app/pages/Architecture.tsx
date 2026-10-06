import { Eyebrow, PageHero, Quote } from "../components/Primitives"
import { images } from "../data/content"

export default function Architecture() {
  return (
    <>
      <PageHero
        eyebrow="Arquitetura · 02"
        title={
          <>
            Arquitetura como
            <br />
            trama de <em>relações.</em>
          </>
        }
        intro="A arquitetura da Lumear nasce do encontro entre pessoa, território, matéria e tempo."
        image={images.landscape.src}
        imageAlt={images.landscape.alt}
      />
      <section className="architecture-grid section">
        <div>
          <Eyebrow>Do território ao detalhe</Eyebrow>
          <h2>Uma visão, muitas escalas.</h2>
        </div>
        <div>
          <p>
            O desempenho ambiental começa na implantação. O conforto começa na
            orientação. A durabilidade começa no desenho do detalhe. Cada
            decisão reorganiza o todo.
          </p>
          <p>
            Arquitetura, engenharia, paisagem e interiores trabalham desde o
            início, reduzindo desperdício e aumentando a clareza construtiva.
          </p>
        </div>
      </section>
      <section className="principles">
        {[
          [
            "01",
            "Pertencer",
            "A casa participa do lugar e constrói continuidade com ele.",
          ],
          [
            "02",
            "Durar",
            "Sistemas legíveis, matéria adequada e manutenção possível.",
          ],
          [
            "03",
            "Respirar",
            "Luz, sombra, ventilação e água como infraestrutura sensível.",
          ],
          [
            "04",
            "Adaptar",
            "Estruturas capazes de receber outros ciclos de vida.",
          ],
        ].map(([number, title, text]) => (
          <div key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
      <Quote text="Sustentabilidade nasce de decisões capazes de sustentar a vida, a matéria e o tempo." />
    </>
  )
}
