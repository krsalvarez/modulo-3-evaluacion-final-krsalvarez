const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.results.map((user) => {
                return {
                    photo: user.image,
                    name: user.name,
                    species: user.species,
                    id: user.id
                }
            })
            return parsedCharacters;
        })
}

export default getCharactersFromApi;