var main_div = document.getElementsByClassName("wealth-wrapper-outer")[0];
var marker_start = "<!--i18n-start-->";
var marker_end = "<!--i18n-end-->";

var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {translate_page(this.response);}
        if (this.status == 404) {main_div.innerHTML = "Error! Please try reloading the page.";}

        main_div.style.display = 'block';
    }
}
xhttp.open("GET", "../index.html"); //Get the english version
xhttp.send();

var translated_images = i18n_data.images || ["cares.svg","ninety.svg","plane.png","poverty.svg"];

function translate_page(response){
    response = response.substring(response.indexOf(marker_start),response.indexOf(marker_end)); //discard metadata
    main_div.innerHTML = response;
    if(window.i18n_data){
        var all = document.querySelectorAll("p,div,h1,h2");
        for (var el of all) {
            for(var cl of el.classList){
                if(cl.startsWith('i18n-')){
                    el.innerHTML = i18n_data.strings[cl] || el.innerHTML; //apply translations
                }
            }
        }

        var imgs = document.getElementsByTagName("IMG");
        for(var img of imgs){
            if(!translated_images.includes(img.src.substring(img.src.lastIndexOf("/")+1))){
                img.src = img.src.replace("/" + i18n_data.code + "/","/../"); //set src for untranslated images to ../
            }
        }
    } 
}

