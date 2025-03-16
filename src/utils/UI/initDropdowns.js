import { Dropdown } from 'bootstrap';


function initDropdowns() {
  Array.from(
    document.querySelectorAll('.dropdown-toggle')
  ).forEach(element => new Dropdown(element))

}

export default initDropdowns;
