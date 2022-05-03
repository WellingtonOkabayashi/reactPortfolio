import React from 'react'

function Home() {
  return (
    <div>
      <section id="home">
        <div className="home margin">
          <div className="container-text">
            <h4>Bem-vindo. Eu sou</h4>
            <h2 className="title">
              <span>WellingtonOkabayashi</span>
            </h2>
            <p className="texto">
              Sou desenvolvedor Web em treinamento, fique a vontade e navege no
              meu site e de uma olhada em alguns projetos que eu ja desenvolvi .
            </p>
          </div>
          <div className="image">
            <img src="./assets/work.jpg" alt="" />
          </div>
        </div>

        <div className="divider max"></div>
      </section>
    </div>
  )
}
export default Home
