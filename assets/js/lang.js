//detect browsers lang and redirect based on it
 var lang = navigator.language || navigator.browserLanguage;

  if (lang.indexOf('en') > -1) {
  document.location.href = 'usindex.html';
  } else if(lang.indexOf('fr') > -1){
  document.location.href = 'frindex.html';
  }