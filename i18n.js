var lang = navigator.languages[0].substring(0,2);
if(i18n[lang]){
    var all = document.querySelectorAll("p,div,h1,h2");
    for (var el of all) {
        for(var cl of el.classList){
            if(cl.startsWith('i18n-')){
                el.innerHTML = i18n[lang].strings[cl] || el.innerHTML;
            }
        }
    } 
}

document.getElementsByClassName('wealth-wrapper-outer')[0].style.display = 'block';
