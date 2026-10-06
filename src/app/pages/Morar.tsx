import { PageHero, Quote, Reveal } from "../components/Primitives"
import { images } from "../data/content"

export default function Morar() {
  return (
    <>
      <PageHero
        eyebrow="Morar · 01"
        title={
          <>
            A vida é a primeira
            <br />
            <em>medida</em> da casa.
          </>
        }
        intro="Antes de desenhar espaços, procuramos compreender como a vida acontece — e quais possibilidades ela pode abrir."
        image={images.interior.src}
        imageAlt={images.interior.alt}
      />
      <section className="essay section">
        <span>A casa orienta relações.</span>
        <div>
          <h2>
            Ela aproxima, acolhe, oferece resguardo e abre espaço para a
            mudança.
          </h2>
          <p>
            O projeto começa pela escuta do que é dito e pela observação do que
            raramente cabe em uma lista: ritmos, hábitos, memórias, desejos e
            limites. Dessa leitura nasce uma arquitetura consciente de quem a
            habita.
          </p>
        </div>
      </section>
      <section className="values section">
        {[
          [
            "Corpo",
            "Escala, temperatura, textura, movimento e repouso. O espaço é percebido antes de ser explicado.",
          ],
          [
            "Cotidiano",
            "A beleza que importa atravessa a rotina, a manutenção e os usos imprevistos.",
          ],
          [
            "Tempo",
            "Projetamos para o presente e mantemos abertas as possibilidades do futuro.",
          ],
        ].map(([title, text], index) => (
          <Reveal className="value" key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </section>
      <Quote text="Morar bem é reconhecer-se no espaço e encontrar lugar para mudar." />
    </>
  )
}
