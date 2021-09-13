document.getElementById("logo").style.display = "none"


var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$("#btn-learn").on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#info").offset().top
    }, 300);
})

var animated = false;
$(document).on('scroll', function() {
    if (screen.width <= 900 && $(this).scrollTop() >= $('#troll').position().top && !animated ) {
        animated = true;
        $('#exampleModalCenter').modal('show')
        $('#btn-close').on('click', ()=>{
            $('#exampleModalCenter').modal('hide')
        })
    }
  })


  $( ".selectpicker" ).change(function() {
    let lang = $(this).val();    
    // alert(lang)
    switch (lang) {
        case "1":
            window.location.replace('index.html');
            break;
        case "2":            
            window.location.replace('usindex.html');
            break;
        case "3":            
            window.location.replace('frindex.html');
            break;
        default:
            break;
    }
  });

//listening to window load and adding 
//100 ms to make longer the animation

$(window).on("load",function(){
    var userLang = navigator.language || navigator.userLanguage; 
alert ("The language is: " + userLang);
    setTimeout(function(){    
     $(".loader-wrapper").fadeOut("slow");
    document.getElementById("logo").style.display = "block"
    gsap.to("#logo", {
        duration: 1, 
        y:toPX("-26vh")
    });
    
    gsap.to("#info-text", {
        duration: 1,
        y: '-10%'
    }) }, 100);

});

function toPX(value) {
    return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
}

const navbar  = $("#navbar-phone")
const toggler = $(".navbar-toggler")

$(window).scroll(()=>{
    if(screen.width <= 900){
        navbar.addClass("bg-purple")
        toggler.addClass("text-white")
    }
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        if(screen.width <= 900){
            navbar.removeClass("bg-purple")
            toggler.removeClass("text-white")
        }
    }, 450));

})

    /*
    :  .         .::       ':        ::        ::       :.y. :     
    .: :::       :" ::       :        ::      .:'':      .yyy.':    
    .' ::F.     :'   ::    :::::::::::::.     :'  ':    .y::Fy ':   
    :  ::FF.   :'     : .::" ::      ::  ::  .:    ':  .yF::Fy  :   
    : .:F:FF..:       :::'    :      :     :::'     '::yF:::Fy  :   
    : ::FF:FF:'      .:::     :.     :      :.      .yFF::::Fy  :   
    : ::FFF:FF.      :' ::    ':    .:     : :.    .yFF:::::Fy  :   
    : :FFFF"FFFy.   .:   :     :    :'    :   :. .yyFF::::::Fy  :   
    : :FFFFyy:FFy. .:'   ':    ::::::   .'     "yyFF::::::::Fy  :   
    : :FFFFy:::FFFy:.     ':  : :  ::. .'     .yyFF:::::::::Fy  :   
    : :FFFFy::::FFFyy.     :::' :  : '::    .yyFF:::::::::::Fy:.:   
    : :FFFFy::::::"FFy.   :: :  : ::  : :  .yyF:::::::::::::FFy":   
    : ::FFFyy:::::::FFF.::    : : :  :  ::.yF:::::::::::::::Fy: :   
    :  :FFyyyy::::::::FFy.     ::::::   .yyF:::::::::::::::Fy': :   
    :  :FFyyyyYYY::::::.FFFy::  :::    yyFF::::::::::::::yyFy : :   
    : .::FFFyyyYYYYY:::::.FFF    ::   FFyyy:::::::::::yyyyFy' : :   
    :.:  'FFFyyyYYYYyyy::FFF::::::::::FFyyyy::::::::yyyyyyyY:.: :   
    :':   :FFFyyYYYYyyy:FF'   . ::::. 'FFFyyyyyy::yyyyyyyyY":::::   
    : :.  'FFFyyyyyYyyyFF:   :' :  : :  'FFFyyyyyyyyyyyyyY'  ":::   
    ': :   'FyyyyyyyyFF'  :."  .:  :  ". ."FFFyyyyyyyyyyY'   :::'   
    : :    'FFyyyyFF:.   .:   :    :   :   'FFFyyyyyyyY'    : :    
    : ':    :FFyFF'  :. .: :  :    :   :     :FFFyyyyY'     : :    
    ': :   :'FFFF'    :::    ::    :.:" :. .: 'FFFFYY'     : :'    
    . ': :' 'FF'     ::     :"::::::    : :   'FFFy::.   .: :     
    ': ::'    ":    :':.    :      :     ::.      :" ":  :  :     
    . .:      '.  :'  :.  .:      ::   ::':.    :"   "::" :'     
    ' ::.      : :     '. :       :: :::  ':.  :      ::  :      
        ::  :     '::      '::.      ::::     ': :      :::  :      
        ':   :.   :::       :'::::::::::       ::      :' :.:'      
        :   ':  :' '.      :        ':.      .:.     :'  :::       
        :    "::'   ':.    :         ':     .:':.   :'   "::       
        '.    ".      ':. :           :   .:'  ':. .:     :'       
        ::.   ":.      ':::::.       :: ::'    ': :'     :        
        : ": .: ':.     .:   ":::::::;:::'      :::     :'        
        :  "::    '.    :'            :       ."":.     :         
        :   ::     '.   :             :     .:'   :.   .'         
        ':  ::.     ':..:              :   .'     ':  :'          
        _:".: ":      '':.             : .:"       :.:'           
    [Juan Romero]      .....-'.: .:  ".      :"'':::::::..   .:'         ::             
    _.-.:"'---....._   _.-:."     .: : ".  :.  ::           '":::::.        :":             
    ."' ."             """ .".......: : :. :". ": :                  ::      .:" :.            
    .:.  :                .."        ..:  : ":  ". :                    :.   .::" :':".          
    "   ':""'...        .."        ..:  :  :   :   ":                    ::  :"":  : :  "-.       
    ."       """"..::::........"  :. :  :   :     ".                  :.-:" .:  : ':    "-.    
    :              ::         :   :  :'  :   :       '--____________---"  :  :'  :  :       '-.
    */