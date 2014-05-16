; (function () {
    var slides = document.getElementsByClassName("slide");
    var slideNum = 0;

    var nextSlide = function () {
        if (slideNum < slides.length - 1) {
            slides[slideNum].setAttribute("class", "slide slideOut");
            $("#wrapper").animate({ scrollTop: 0 }, "fast");
            slideNum++;
            slides[slideNum].setAttribute("class", "slide slideIn");
            updateBar();
        }
        if (slideNum === 1) {
            document.getElementById("loading_bar").className = "visible";
        }
    };


    var prevSlide = function () {
        if (slideNum > 0) {
            slides[slideNum].setAttribute("class", "slide slideOff");
            slideNum--;
            slides[slideNum].setAttribute("class", "slide slideIn");
            updateBar();
        }

    };

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 39) {
            nextSlide();
        } else if (evt.keyCode === 37) {
            prevSlide();
        }
    });
    document.getElementById("next").onclick = nextSlide;
    document.getElementById("prev").onclick = prevSlide;

    var bar = document.getElementById("bar").style;

    function updateBar() {
        bar.width = slideNum / (slides.length - 1) * 100 + "%";
    }
}());