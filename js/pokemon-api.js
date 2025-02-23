// import pokemonCardTpl  from '../templates/pokemon-card.hbs'

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then(response => {
//         return response.json();
//     })
//     .then(pokemon => {
//         console.log(pokemon);
//         const markup = pokemonCardTpl(pokemon);
//         console.log(markup);
//     })
//     .catch(error => {
//         console.log(error);
//     });


const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");



search.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()
    const { query } = evt.currentTarget.elements
    getWeather(query.value)
        .then(({ pokemon }) => list.innerHTML = createMarkup(pokemon))
            .catch(err => console.log(err));
}


function getWeather(city, days) {

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/2';
    // const API_KEY = 'a3ebf628800840f4a37220957252202';

  return  fetch(`https://pokeapi.co/api/v2/pokemon/2`)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
    
};

function createMarkup({ pokemon }) {
    return pokemon.map(({ name, weight, height, icon: { sprites: {front_default }}}) => `<li>
        <img src="${icon}" alt="${name}">
        <p>${name} </p>
        <p>${weight}</p>
        <h2>${height}</h2>
      </li>`).join('')
};