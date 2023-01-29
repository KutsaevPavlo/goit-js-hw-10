//export

const ENDPOINT = "https://restcountries.com/v3.1/name"

function fetchCountries(name){
return fetch(`${ENDPOINT}/${name}?fields=name,capital,population,flags,languages`)
.then((res) => {
    if(!res.ok){
        throw new Error(res.statusText)
    }
    return res.json()
});
}

export default { fetchCountries };



// https://restcountries.com/v2/{service}?fields={field},{field},{field}

// https://restcountries.com/v2/all?fields=name,capital,currencies


// Тобі потрібні тільки наступні властивості:

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

