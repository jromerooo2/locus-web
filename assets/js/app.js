document.getElementById("logo").style.display = "none"

//listening to window load 

$(window).on("load",function(){
    setTimeout(function(){    
     $(".loader-wrapper").fadeOut("slow");
    document.getElementById("logo").style.display = "block"
    gsap.to("#logo", {
        duration: 1, 
        y: -240
    });
    
    gsap.to("#info-text", {
        duration: 1,
        y: '-10%'
    }) }, 100);

});

const scrolltosome = (id)=>{
    gsap.to(window, {duration: 2, scrollTo: id});
}

