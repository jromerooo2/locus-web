document.getElementById("logo").style.display = "none"

//listening to window load and adding 
//100 ms to make longer the animation

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