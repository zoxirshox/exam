var elInputHeight = document.querySelector("[data-input-height]");
var elInputWeight = document.querySelector("[data-input-weight]");
var elInputImg = document.querySelector("[data-input-img-url]");
var elInputName = document.querySelector("[data-input-name]");
var elInputSearch = document.querySelector("[data-input-search]");
var elForm = document.querySelector("[data-form]");
var elBox = document.querySelector("[data-box]");
var elUl = document.querySelector("[data-ul]");
var elTemplate = document.querySelector("[data-template]");
var elSelect = document.querySelector("[data-select]");
var elSelectSort = document.querySelector("[data-select-sort]");
var elPokemons = document.querySelector("[data-pokemon]");

function renderPok() {
  var html = "";

  pokemons.forEach((item) => {
    var pokemon = pokemons.find((pokemon) => pokemon.id === item);
    html += `<p class = "pok-mod">${pokemon.name}</p>`;
  });

  elPokemons.innerHTML = html;
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var pokemon = {
    name: null,
    img: null,
    height: null,
    weight: null,
    type: [],
  };

  pokemon.name = elInputName.value;
  pokemon.height = elInputHeight.value;
  pokemon.weight = elInputWeight.value;
  pokemon.img = elInputImg.value;
  pokemon.search = elInputSearch.value;

  pokemons.unshift(pokemon);
  elBox.prepend(createDiv(pokemon));
});

renderPokemons(pokemons)

function renderPokemons(Pokemons) {
  elBox.innerHTML = "";
  Pokemons.filter((pokemon) => elBox.append(createDiv(pokemon)))
}

function createDiv(pokemon) {
  var elCard = elTemplate.content.cloneNode(true);
 
  elCard.querySelector("[data-img-temp]").src = pokemon.img;
  elCard.querySelector("[data-card-name]").textContent = pokemon.name;
  elCard.querySelector("[data-card-type]").textContent = pokemon.type;
  elCard.querySelector("[data-card-weight]").textContent = pokemon.weight;
  elCard.querySelector("[data-card-height]").textContent = pokemon.height;
  elCard.querySelector("[data-card-add]").dataset.id = pokemon.id;
 
  return elCard
}

elInputSearch.addEventListener("input", (evt) => {
  var newPokemons = [];
  pokemons.forEach((pokemon) => {
    if (pokemon.name.includes(elInputSearch.value)) {
      newPokemons.push(pokemon);
    }
  });
  renderPokemons(newPokemons);
});