document.getElementById("logo").style.display = "none";
var btn = $("#button");
$(window).scroll(function () {
    $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show");
}),
    btn.on("click", function (e) {
        e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "300");
    }),
    $("#btn-learn").on("click", (e) => {
        e.preventDefault(), $("html, body").animate({ scrollTop: $("#info").offset().top }, 300);
    });
var animated = !1;
function toPX(e) {
    return (parseFloat(e) / 100) * (/vh/gi.test(e) ? window.innerHeight : window.innerWidth);
}
    $(".selectpicker").change(function () {
        switch ($(this).val()) {
            case "1":
                window.location.replace("index.html");
                break;
            case "2":
                window.location.replace("usindex.html");
                break;
            case "3":
                window.location.replace("frindex.html");
        }
    }),
    $(window).on("load", function () {
        setTimeout(function () {
            $(".loader-wrapper").fadeOut("slow"), (document.getElementById("logo").style.display = "block"), gsap.to("#logo", { duration: 1, y: toPX("-26vh") }), gsap.to("#info-text", { duration: 1, y: "-10%" });
            if (screen.width <= 900) {
                gsap.to(".row-cards2", {
                    x:"-520%",
                    yoyo:true,
                    repeat: -1, 
                    duration:9 
                })
            }else{
                gsap.to(".row-cards2", {
                    x:"-50%",
                    yoyo:true,
                    repeat: -1, 
                    duration:12 
                })
            }
        }, 100);
    });
const navbar = $("#navbar-phone"),
    toggler = $(".navbar-toggler");
$(window).scroll(() => {
    screen.width <= 900 && (navbar.addClass("bg-purple"), toggler.addClass("text-white")),
        clearTimeout($.data(this, "scrollTimer")),
        $.data(
            this,
            "scrollTimer",
            setTimeout(function () {
                screen.width <= 900 && (navbar.removeClass("bg-purple"), toggler.removeClass("text-white"));
            }, 450)
        );
});



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