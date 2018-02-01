var toggle;
var checked = false;
var counter = document.querySelector('.counter');
var bookmarkknop = document.querySelector('.bookmark');
var confirmessage = document.querySelector('.confirmmessage');



function bookmarkfill() {
    if (checked == true) {
        bookmarkknop.src = 'resources/images/bookmarkoutline.svg';
        checked = false;
    }
    else {
        bookmarkknop.src = 'resources/images/bookmark.svg';
        checked = true;
    }
        counter.classList.toggle("showcounter");
        confirmessage.classList.toggle("showconfirmmessage");

      setTimeout(function () {
        confirmessage.classList.toggle("showconfirmmessage");
    }, 3000);

}

bookmarkknop.addEventListener('click', bookmarkfill, false);

