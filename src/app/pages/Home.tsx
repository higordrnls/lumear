import { Link } from "react-router"
import {
  Arrow,
  Eyebrow,
  Reveal,
  StrataTexture,
  TextLink,
} from "../components/Primitives"
import { images, workflowSteps } from "../data/content"

function Hero() {
  return (
    <section className="hero">
      <img src={images.hero.src} alt={images.hero.alt} />
      <div className="hero-shade" />
      <StrataTexture light />
      <div className="hero-copy">
        <Eyebrow light>Arquitetura para a vida em movimento</Eyebrow>
        <h1>
          Lugares para
          <br />
          viver, por inteiro.
        </h1>
      </div>
      <p className="hero-note">Concepção · construção · continuidade</p>
      <a className="hero-scroll" href="#manifesto">
        Descobrir <span>↓</span>
      </a>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <section className="manifesto section" id="manifesto">
        <Eyebrow>01 — Princípio</Eyebrow>
        <Reveal>
          <h2>
            A casa começa
            <br />
            <em>antes</em> das paredes.
          </h2>
        </Reveal>
        <div className="manifesto-grid">
          <p className="big-copy">
            Começa em quem vai morar. Naquilo que já existe, no que se deseja
            preservar e no que ainda pode mudar.
          </p>
          <div>
            <p>
              Entendemos a casa como um processo vivo — da primeira conversa ao
              cotidiano que continua muito depois da obra.
            </p>
            <TextLink to="/morar">Nossa visão sobre morar</TextLink>
          </div>
        </div>
      </section>

      <section className="living section">
        <div className="living-image">
          <img src={images.quiet.src} alt={images.quiet.alt} loading="lazy" />
          <span>Silêncio, luz e presença.</span>
        </div>
        <Reveal className="living-copy">
          <Eyebrow>02 — O morar</Eyebrow>
          <h2>A arquitetura encontra sua medida no cotidiano.</h2>
          <p>
            Morar é acordar, atravessar, guardar, receber, descansar. É dividir
            a mesa e procurar silêncio. Gestos simples dão forma ao espaço e
            revelam o que ele precisa ser.
          </p>
        </Reveal>
        <div className="living-words" aria-label="Dimensões do morar">
          {[
            "Corpo",
            "Rotina",
            "Encontro",
            "Solitude",
            "Memória",
            "Mudança",
          ].map((word, index) => (
            <span key={word}>
              0{index + 1} {word}
            </span>
          ))}
        </div>
      </section>

      <section className="territory">
        <img
          src={images.territory.src}
          alt={images.territory.alt}
          loading="lazy"
        />
        <div className="territory-overlay" />
        <Reveal className="territory-copy">
          <Eyebrow light>03 — Território</Eyebrow>
          <h2>
            O território
            <br />
            <em>desenha</em> a casa.
          </h2>
          <p>
            Topografia, vegetação, luz, vento, água e clima formam a primeira
            camada de cada projeto.
          </p>
          <TextLink to="/arquitetura">Arquitetura como relação</TextLink>
        </Reveal>
      </section>

      <section className="process-section section">
        <div className="section-heading">
          <Eyebrow>04 — Um processo inteiro</Eyebrow>
          <h2>Como a Lumear trabalha.</h2>
          <p>
            Diferentes conhecimentos cuidam juntos da mesma questão, em todas as
            escalas.
          </p>
        </div>
        <div className="process-list">
          {workflowSteps.map(({ title, text }, index) => (
            <Reveal className="process-row" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
        <p className="process-scope">
          A mesma lógica de projeto orienta uma casa autoral e um conjunto
          habitacional: adaptar, durar e construir com menos.
        </p>
      </section>

      <section className="integration section">
        <Eyebrow light>05 — Trabalho integrado</Eyebrow>
        <Reveal>
          <h2>
            Diferentes saberes.
            <br />
            Uma pergunta em comum:
            <br />
            <em>como viver melhor?</em>
          </h2>
        </Reveal>
        <div className="discipline-ring">
          {[
            "Arquitetura",
            "Engenharia",
            "Paisagem",
            "Interiores",
            "Construção",
            "Tecnologia",
            "Desempenho",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="integration-note">
          Cada decisão atravessa todas as escalas — do território ao detalhe, da
          estrutura à sensação de estar em casa.
        </p>
      </section>

      <section className="matter">
        <div className="matter-copy">
          <Eyebrow>06 — Matéria</Eyebrow>
          <Reveal>
            <h2>
              O tempo também
              <br />
              constrói.
            </h2>
          </Reveal>
          <p>
            Terra, madeira, pedra, concreto, fibras, metal, vegetação, luz e
            água. Escolhemos matéria por sua origem, desempenho, presença e
            capacidade de envelhecer com dignidade.
          </p>
          <Link to="/arquitetura">
            Ver nossa abordagem <Arrow />
          </Link>
          <StrataTexture />
        </div>
        <div className="matter-image">
          <img src={images.matter.src} alt={images.matter.alt} loading="lazy" />
          <div className="material-labels">
            <span>massa</span>
            <span>sombra</span>
            <span>permanência</span>
          </div>
        </div>
      </section>

      <section className="research-home section">
        <div className="research-index">
          <span>R / 01</span>
          <span>Pesquisa contínua</span>
        </div>
        <div className="research-copy">
          <Eyebrow>07 — Futuros possíveis</Eyebrow>
          <Reveal>
            <h2>Experimentar amplia o campo da arquitetura.</h2>
          </Reveal>
          <p>
            Investigamos sistemas adaptáveis, fabricação digital, circularidade
            e desempenho ambiental. A tecnologia apoia decisões mais humanas e
            precisas.
          </p>
          <TextLink to="/pesquisa">Caderno de pesquisa</TextLink>
        </div>
        <img
          src={images.research.src}
          alt={images.research.alt}
          loading="lazy"
        />
      </section>

      <section className="continuity">
        <img
          src={images.continuity.src}
          alt={images.continuity.alt}
          loading="lazy"
        />
        <div className="continuity-panel">
          <Eyebrow>08 — A casa continua</Eyebrow>
          <Reveal>
            <h2>
              Uma obra termina.
              <br />A casa, não.
            </h2>
          </Reveal>
          <p>
            As pessoas mudam. As famílias se reorganizam. O clima, os usos e as
            tecnologias também. A arquitetura pode acompanhar essas
            transformações e preservar sua essência.
          </p>
        </div>
      </section>

      <section className="closing section">
        <span className="closing-number" aria-hidden="true">
          ∞
        </span>
        <Eyebrow>O início de cada projeto</Eyebrow>
        <Reveal>
          <h2>
            Toda casa começa
            <br />
            com uma <em>ideia.</em>
          </h2>
        </Reveal>
        <TextLink to="/contato">Conte-nos a sua</TextLink>
      </section>
    </>
  )
}
