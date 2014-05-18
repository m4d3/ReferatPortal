parent.document.getElementById("sb-player").setAttribute("AllowFullScreen", "true");
parent.document.getElementById("sb-player").setAttribute("webkitallowfullscreen", "true");
parent.document.getElementById("sb-player").setAttribute("mozallowfullscreen", "true");

$('video,audio').mediaelementplayer({
    loop: true,
    autoplay: true
});

$('.mejs-overlay').trigger('click');