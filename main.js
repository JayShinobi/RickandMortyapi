
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://rickandmortyapi.com/api/character/?name=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.results.forEach((character) => document.querySelector('h2').innerText = '  ' + character.name)
      data.results.forEach((character) => document.querySelector('h3').innerText = '  ' + character.status)
      data.results.forEach((character) => document.querySelector('img').src = character.image)
      
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}