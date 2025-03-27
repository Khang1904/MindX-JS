const url = "https://handlers.education.launchcode.org/static/planets.json";
const div = document.getElementById('destination');

window.addEventListener('load', function() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((planet) => {
            div.innerHTML += `<img src="${planet.image}" style="width: 200px; height: 200px; alt="planet">
            <h2>${planet.name}</h2>
            <p>Diameter: ${planet.diameter}</p>
            <p>Star: ${planet.star}</p>
            <p>Distance: ${planet.distance}</p>
            <p>Number of Moons: ${planet.moons}</p>
            <br>`;
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
});