function myFunction(x) {
    x.classList.toggle("mudar");
}



 function perfilMenu(){
    var perfilmenu = document.querySelector('.perfilm');

    if (perfilmenu.style.display !== 'none') {
        perfilmenu.style.display = 'none';}
    
    else {
       perfilmenu.style.display = 'block';

    }
}



/* e
document.onclick = function(e){
    var perfilmenu = document.querySelector('.perfilm');
    var btn = document.querySelector('.perfilfoto');

    if ((!perfilmenu.contains(e.target)) && !btn.contains(e.target)) {
        perfilmenu.style.display = 'none'
    }
}*/


function menuL(){
    var menul = document.querySelector('.menul');

    if (menul.style.display !== 'none') {
        menul.style.display = 'none';}
    
    else {
       menul.style.display = 'block';

    }
}

document.onclick = function(e){
    var menul = document.querySelector('.menul');
    var barrinhas = document.querySelector('.barrinhas');

    if ((!menul.contains(e.target)) && !barrinhas.contains(e.target)) {
        menul.style.display = 'none'
    }
}