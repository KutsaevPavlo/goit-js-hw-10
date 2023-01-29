import './css/styles.css';
import debounce from 'lodash.debounce';
import API from "./fetchCountries.js"
import { functions, join } from 'lodash';
const DEBOUNCE_DELAY = 300;
const _ = require('lodash');

const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


//TEST
API.fetchCountries("sw").then(console.log);
//TEST 2
API.fetchCountries("sweden").then((data) => {
    console.log(createMarkup(data));
    console.log(createMarkupForMoreThenTwo(data));
    
    
    const markupForMoreThenTwo= createMarkupForMoreThenTwo(data);
    const markupForOne= createMarkup(data);
    if (data.length > 10) {
        console.log("Too many matches found. Please enter a more specific name")} 
        else if(data.length >= 2 && data.length < 10) {
        addMarkup(countryList, markupForMoreThenTwo);
        }
        else 
        addMarkup(countryInfo, markupForOne);
        console.log(data.length);
    });

const form = document.getElementById("search-box");

form.addEventListener("input", _.debounce(onInput, DEBOUNCE_DELAY));
// form.addEventListener("input", onInput);

function onInput(e){
    e.preventDefault();
  
    // const form = e.currentTarget;
    const form = e.target;
    // console.dir(form);
    const inputValue = form.value.trim() != '';
    // console.log(inputValue);
    API.fetchCountries(inputValue).then((data) => {
        console.log(createMarkup(data));
    });
    };

    function createMarkup(data){
        return data
        .map(({ name, capital, population, flags, languages}) => {
            return `
            <div class="countrie-card">
            <img src="${flags.svg}" alt="" width="50" height="50"> <h2>${name.official}</h2>
            <p>Capital: ${capital}</p>
            <p>Population: ${population}</p>
            <p>Languages: ${Object.values(languages)}</p>
            </div>
            `
        })
        .join("");
    }
    

    function createMarkupForMoreThenTwo(data){
        return data
        .map(({ name, flags}) => {
            return `
            <div class="countrie-card">
            <img src="${flags.svg}" alt="" width="50" height="50"> <p>${name.official}</p>
           
            </div>
            `
        })
        .join("");
    }
    



    function addMarkup(element, constMarkup) {
        element.insertAdjacentHTML("beforeend", constMarkup);
      }
 
