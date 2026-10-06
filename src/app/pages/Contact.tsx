import { FormEvent, useState } from "react"
import { Arrow, Eyebrow } from "../components/Primitives"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact-page">
      <div className="contact-title">
        <Eyebrow>Contato · 05</Eyebrow>
        <h1>
          Começamos
          <br />
          pela <em>escuta.</em>
        </h1>
        <p>
          Se existe uma pergunta, um lugar ou uma vontade de morar de outro
          modo, este pode ser o começo.
        </p>
        <a href="mailto:conversa@lumear.com.br">
          conversa@lumear.com.br <Arrow />
        </a>
      </div>
      <form className="contact-form" onSubmit={submit}>
        {sent ? (
          <div className="form-success">
            <span>Mensagem recebida</span>
            <h2>Que bom começar esta conversa.</h2>
            <p>
              Este protótipo não envia dados, mas este é o estado de confirmação
              da experiência.
            </p>
            <button type="button" onClick={() => setSent(false)}>
              Voltar ao formulário
            </button>
          </div>
        ) : (
          <>
            <label>
              <span>Seu nome</span>
              <input
                required
                name="name"
                placeholder="Como podemos chamar você?"
              />
            </label>
            <label>
              <span>Seu e-mail</span>
              <input
                required
                type="email"
                name="email"
                placeholder="voce@email.com"
              />
            </label>
            <label>
              <span>Sobre o que gostaria de conversar?</span>
              <select name="subject" defaultValue="">
                <option value="" disabled>
                  Escolha um assunto
                </option>
                <option>Um lugar para morar</option>
                <option>Parceria e colaboração</option>
                <option>Pesquisa</option>
                <option>Imprensa e conteúdo</option>
              </select>
            </label>
            <label>
              <span>Conte um pouco</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Não é preciso ter tudo definido."
              />
            </label>
            <button className="submit" type="submit">
              Enviar mensagem <Arrow />
            </button>
          </>
        )}
      </form>
    </section>
  )
}
