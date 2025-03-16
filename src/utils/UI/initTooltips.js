import { Tooltip } from 'bootstrap';


function initTooltips() {
  Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  ).forEach(element => new Tooltip(element))
}

export default initTooltips;
