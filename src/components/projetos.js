import React from 'react'
function projetos() {
  return (
    <div>
      <section id="projetos">
        <div className="projetos margin">
          <div className="projetos-text">
            <h2 className="title">Projetos desenvolvidos .</h2>
            <p className="texto">
              Clique em algum projeto e voçê será redirecionado para poder
              navegar e ter uma experiência em cada projeto .
            </p>
            <div className="sites">
              <div className="site-text">
                <p>Login system</p>
                <a
                  href="https://wellingtonokabayashi.github.io/login-system/"
                  target="blank"
                  className="login-system efect"
                ></a>
              </div>
              <div className="site-text">
                <p>Projeto Dashbar</p>
                <a
                  href="https://wellingtonokabayashi.github.io/sidebar/"
                  target="blank"
                  className="dash efect"
                ></a>
              </div>
              <div className="site-text">
                <p>Projeto Dashbar 2</p>
                <a
                  href="https://wellingtonokabayashi.github.io/dashbar_DevWizard/"
                  target="blank"
                  className="wizardbar efect"
                ></a>
              </div>
            </div>
            <div className="sites">
              <div className="site-text">
                <p>Projeto Coffee</p>
                <a
                  href="https://wellingtonokabayashi.github.io/Project_coffee/"
                  target="blank"
                  className="coffee efect"
                ></a>
              </div>
              <div className="site-text">
                <p>Projeto Blog</p>
                <a
                  href="https://wellingtonokabayashi.github.io/theblog/"
                  target="blank"
                  className="blog efect"
                ></a>
              </div>
              <div className="site-text">
                <p>Calculadora de Calorias</p>
                <a
                  href="https://wellingtonokabayashi.github.io/calorie-calculator/"
                  target="blank"
                  className="calc efect"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-2 max"></div>
      </section>
    </div>
  )
}

export default projetos
