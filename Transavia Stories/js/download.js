var toggle;
var checked = false;
var downloadknop = document.querySelector('.download');
var progressbar = document.querySelector('.progressbar');
var voltooid = document.querySelector('.progressbar p');

function downloaden() {
    if (checked == true) {
        downloadknop.src = 'resources/images/download-icon.svg';
        checked = false;
    }
    else {
        downloadknop.src = 'resources/images/downloadvoltooid.svg';
        checked = true;
    }
    progressbar.classList.toggle('showprogress');
    setTimeout(function () {
        voltooid.classList.toggle("voltooid");
    }, 3000);
}
downloadknop.addEventListener('click', downloaden, false);
