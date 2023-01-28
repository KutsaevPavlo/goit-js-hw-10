import './css/styles.css';
import debounce from 'lodash.debounce';
import API from "./fetchCountries.js"
import { functions } from 'lodash';
const DEBOUNCE_DELAY = 300;
const _ = require('lodash');

API.fetchCountries("ukraine").then(console.log);

const form = document.getElementById("search-box");

form.addEventListener("input", _.debounce(onInput, DEBOUNCE_DELAY));
// form.addEventListener("input", onInput);

function onInput(e){
    e.preventDefault();
  
    // const form = e.currentTarget;
    const form = e.target;
    // console.dir(form);
    const inputValue = form.value;
    // console.log(inputValue);
    API.fetchCountries(inputValue).then((data) => {
        console.log(data);
    });
    };


    function createMarkup({name, capital, population, flags, languages}){
        return
        `
        <div class="countrie-card"
        flags.svg
        `
    }


// _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)

// API.fetchCountries(inputValue).then(({data}) => {
//     if(data.length === 0) throw new 
//     Error("No data");
//     console.log(0);
// });

