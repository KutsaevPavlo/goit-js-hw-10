import './css/styles.css';

const DEBOUNCE_DELAY = 300;


fetch("https://restcountries.com/v3.1/name/ukraine")

.then((res) => res.json())
.then((data) => console.log(data));

