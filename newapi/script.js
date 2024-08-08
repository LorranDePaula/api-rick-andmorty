document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    const charactersContainer = document.getElementById('characters-container');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.className = 'character-card';

                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                    <p>Gender: ${character.gender}</p>
                `;

                charactersContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
