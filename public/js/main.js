//======= ----menu ativo---- ========== //

//======= ----api---- ========== //
/*
Promise.all([
  axios.get('https://api.github.com/users/WellingtonOkabayashi'),
  axios.get('https://api.github.com/users/WellingtonOkabayashi/repos')
]).then(async responses => {
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
})
*/
