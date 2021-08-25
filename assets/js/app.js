gsap.to("#logo", {
    duration: 1, y: -200
});

gsap.to("#info-text", {
    duration: 1,
})

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

