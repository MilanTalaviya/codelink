

var t = 0;
function Slider() {
    var img = document.getElementsByClassName('sliimg');
    for (var i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }
    img[t].style.display = "block"
}

function next() {
    var img = document.getElementsByClassName('sliimg');
    t++;
    if (t >= img.length) {
        t = 0
    }
    Slider();
}

function prev() {
    var img = document.getElementsByClassName('sliimg');
    t--;
    if (t < 0) {
        t = img.length - 1;
    }
    Slider();   
}

window.onload = function () {  
    Slider()
}