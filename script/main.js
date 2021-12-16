$(document).ready(function(){
    $(".char_icon:hover + .characters").mouseenter(function(){
        $(".characters").css("animation: rotateX 0.4s 180ms ease-in-out both;");
    });
    $("p").mouseleave(function(){
        $("p").css("background-color", "lightgray");
    });
});