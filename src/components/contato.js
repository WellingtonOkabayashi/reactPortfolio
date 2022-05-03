import React from 'react'
function contato() {
  return (
    <div>
      <section id="contato">
        <div className="contato margin">
          <div className="container">
            <h2 className="text">Forma de contato.</h2>
            <p>
              Caso queira solicitar alguma consulta ou tenha alguma duvida
              ,fique a vontade para entrar em contato responderei assim que
              possível.
            </p>
            <div className="contact-email">
              <form
                action="https://formsubmit.co/okabayashiwellington@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://wellingtonokabayashi.github.io/portfolio/submit.html"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu Nome"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu Email"
                  required
                />
                <input type="text" name="subject" placeholder="Assunto" />
                <textarea
                  name="message"
                  placeholder="Digite sua Mensagem"
                ></textarea>
                <button type="submit" required>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className=" contents"></div>
      </section>
    </div>
  )
}
export default contato
