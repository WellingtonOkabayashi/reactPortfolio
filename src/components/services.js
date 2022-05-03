import React from 'react'
function services() {
  return (
    <div>
      <section id="servicos">
        <div className="servicos margin">
          <div className="container">
            <h2 className="text">Alguns dos meus Serviços</h2>
            <div className="cards">
              <div className="card">
                <a href="#contato">
                  <i className="fa-solid fa-laptop-code"></i>
                  <p>Desenvolvimento de Sites</p>
                </a>
              </div>
              <div className="card">
                <a href="#contato">
                  <i className="fa-solid fa-stethoscope"></i>
                  <p>Revisão e melhoras</p>
                </a>
              </div>
              <div className="card">
                <a href="#contato">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <p>Desenvolvimento de sites mobile</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider max"></div>
      </section>
    </div>
  )
}
export default services
