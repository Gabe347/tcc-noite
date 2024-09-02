function myFunction(x) {
    x.classList.toggle("mudar");
}

 function perfilMenu(){
    var perfilmenu = document.querySelector('.perfilm');
    if (perfilmenu.style.display === 'none') {
        perfilmenu.style.display = 'block';}
    
    else {
       perfilmenu.style.display = 'none';

    }
}

var btn = document.createElement('img');
btn.src = "Imagens/userg.png"

function menuL(){
    var menul = document.querySelector('.menul');
    var barrinhas = document.querySelector('.barrinhas');

    if (menul.style.display === 'none') {
        menul.style.display = 'block';}
    
    else {
       menul.style.display = 'none';

    }
}

document.onclick = function(e){
    var menul = document.querySelector('.menul');
    var barrinhas = document.querySelector('.barrinhas');

    if ((!menul.contains(e.target)) && !barrinhas.contains(e.target)) {
        menul.style.display = 'none'
    }
}