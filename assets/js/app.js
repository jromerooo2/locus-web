document.getElementById("logo").style.display = "none"

//listening to window load 

$(window).on("load",function(){
    setTimeout(function(){    
     $(".loader-wrapper").fadeOut("slow");
    document.getElementById("logo").style.display = "block"
    gsap.to("#logo", {
        duration: 1, y: -200
    });
    
    gsap.to("#info-text", {
        duration: 1,
    }) }, 1000);

});

