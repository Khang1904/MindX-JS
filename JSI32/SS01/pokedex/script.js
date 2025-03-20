const searchBar = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchBar.value.toLowerCase()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            return response.json();
        })
        .then(data => {
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
                type: data.types.map(type => type.type.name).join(', '),
                moves: data.moves.slice(0, 5).map(move => {
                    let moveName = move.move.name.replace(/-/g, ' ');
                    return moveName.charAt(0).toUpperCase() + moveName.slice(1);
                }).join(', '),
                stats: data.stats.map(stat => {
                    let statName = stat.stat.name.replace(/-/g, ' ');
                    return `${statName.charAt(0).toUpperCase() + statName.slice(1)}: ${stat.base_stat}`;
                }).join(', ')
            }
            console.log(pokemon);

            let propername = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            const pokemonCard = `
                <img src="${pokemon.image}" class="card-img-top" alt="${pokemon.name}">
                <div class="card-body" style="padding: 100px;">
                    <h4 class="card-title">#${pokemon.id}</h4>
                    <h2 class="card-text">${propername}</h2>
                    <p class="card-text">Type: ${pokemon.type}</p>
                    <p class="card-text">Moves:<br> ${pokemon.moves}</p>
                    <p class="card-text">Stats: <br>${pokemon.stats}</p>
                </div>`;
            document.querySelector('.container').innerHTML = pokemonCard;
        })
        .catch(error => {
            document.querySelector('.container').innerHTML = '<p>Pokemon not found</p>';
            console.error('Error fetching Pokemon:', error);
        });
});