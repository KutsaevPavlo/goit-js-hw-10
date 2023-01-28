import './css/styles.css';
import debounce from 'lodash.debounce';
import API from "./fetchCountries.js"
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
    console.log(inputValue);
    API.fetchCountries(inputValue).then(console.log);
};



// _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)

