var toggle;
var checked = false;
var likeknop = document.querySelector('.like');
var reageer = document.querySelector('.reactmessage');

function likefill() {
    if (checked == true) {
        likeknop.src = 'resources/images/like-icon.svg';
        checked = false;
    }
    else {
        likeknop.src = 'resources/images/like-iconfill.svg';
        checked = true;
    }
    reageer.classList.toggle("showreactmessage");
    setTimeout(function () {
        reageer.classList.toggle("showreactmessage");
    }, 3000);
}
likeknop.addEventListener('click', likefill, false);
