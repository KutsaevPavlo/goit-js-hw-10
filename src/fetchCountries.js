//export

const ENDPOINT = "https://restcountries.com/v3.1/name"

function fetchCountries(name){
return fetch(`${ENDPOINT}/${name}?fields=name,capital,population,flags,languages`)
.then((response) => {
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response.json()
});
}

export default { fetchCountries };



// .then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });



// export const getData = (name) => {
//   return fetch(`${BASE_URL}${name}`).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// };





// https://restcountries.com/v2/{service}?fields={field},{field},{field}

// https://restcountries.com/v2/all?fields=name,capital,currencies


// Тобі потрібні тільки наступні властивості:

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

