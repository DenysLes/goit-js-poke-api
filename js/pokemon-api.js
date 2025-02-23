const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");


search.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()
    const { query } = evt.currentTarget.elements
    getPokemon(query.value)
        .then((data) => list.innerHTML = createMarkup())
            .catch(err => console.log(err));
}

function getPokemon() {
return fetch('https://pokeapi.co/api/v2/pokemon/2')
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
 };   

function createMarkup(pokemon) {
    return arr.map((pokemon) => 
        `<div class="card">
    <div class="card-img-top">
        <img src="{{sprites.front_default}}" alt="{{name}}">
    </div>
    <div class="card-body">
        <h2 class="card-title">Имя:{{name}}</h2>
        <p class="card-text">Вес: {{weight}}</p>
        <p class="card-text">Рост: {{height}}</p>

        <p class="card-text"><b>Умения</b></p>
        <ul class="list-group">
        {{#each abilities}}
            <li class="list-group-item">{{abiliti.name}}</li>
        {{/each}}
        </ul>
    </div>
</div>`).join('')
};