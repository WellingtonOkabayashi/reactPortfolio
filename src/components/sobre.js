import React from 'react'
import axios from 'axios'

function sobre() {
  const apiUrl = 'https://api.github.com/users/WellingtonOkabayashi'
  Promise.all([axios.get(apiUrl), axios.get(apiUrl + '/repos')]).then(
    async responses => {
      const data = responses[0].data

      //console.log(data)

      const repos = await responses[1].data.length
      //console.log(repos)

      let total = repos
      //rep(repos)

      function show(data, repos) {
        let output = ''
        output += `<h2 class="title" >Meu GitHub</h2>`
        output += `<img src="${data.avatar_url}">`
        output += `<h3>${data.name}</h3>`
        output += `<p>${data.bio}</p>`
        output += `<h3>Meus Repositórios:${total}</h3>`
        output += `<button><a href="${data.html_url}" target="blank">GitHub</a></button>`

        document.querySelector('#sobre .github').innerHTML = output
        //console.log(total)
      }

      show(data)
    }
  )
  return (
    <div>
      <section id="sobre">
        <div className="sobre margin">
          <div className="container-text">
            <h2 className="title">Sobre meus conhecimentos .</h2>
            <p className="texto">
              Essas são algumas das tecnologias das quais tenho conhecimento e
              ultilizo nos meus projetos . Espero poder aprender mais
              tecnologias durante meus estudos e aumentar os meu conhecimentos.
            </p>
          </div>

          <p align="center">
            <img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5" />
            <img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6" />
            <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" />
            <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC" />
            <img src="https://img.shields.io/badge/-Git-05122A?style=flat&logo=git" />
            <img src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github" />
          </p>
        </div>
        <div className="stats-text">
          <h2 className="title">GitHub stats.</h2>
        </div>
        <div className="stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=WellingtonOkabayashi&show_icons=true&theme=vision-friendly-dark"
            alt="WellingtonOkabayashi's stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=WellingtonOkabayashi&layout=compact&theme=vision-friendly-dark"
            alt="WellingtonOkabayashi's most languages"
          />
        </div>
        <div id="git" className="git">
          <div className="github"></div>
          <div id="repo" className="repo"></div>
        </div>

        <div className="divider-2 max"></div>
      </section>
    </div>
  )
}

export default sobre
