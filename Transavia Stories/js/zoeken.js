var zoeken = document.querySelector('.zoeken');
var zoekknop = document.querySelector('.search');

function showzoekbar() {
    zoeken.classList.toggle("showzoeken");
}
zoekknop.addEventListener('click', showzoekbar);
