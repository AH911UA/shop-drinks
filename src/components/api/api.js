

export function getDrinksByLetter(letter = 'a') {
    letter = letter || 'a';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    return fetch(url)
        .then(d => d.json());
}

export const getDrinkById = (id) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(d => d.json());
}

export function getDrinksByName(name = 'vodka') {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    return fetch(url)
        .then(d => d.json())
        .catch(e => "drink not found");
}
