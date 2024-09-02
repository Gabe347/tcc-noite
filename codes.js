function myFunction(x) {
    x.classList.toggle("mudar");
}

var btn = document.createElement('img');
btn.src = "Imagens/userg.png"

 function perfilMenu(){
    var perfilmenu = document.querySelector('.perfilm');

    if (perfilmenu.style.display !== 'none') {
        perfilmenu.style.display = 'none';}
    
    else {
       perfilmenu.style.display = 'block';

    }
}

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