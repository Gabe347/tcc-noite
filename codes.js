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

window.addEventListener('mouseup', function(event) {
    var perfilmenu = document.querySelector('.perfilm');
    var btn = document.createElement('img');
    btn.src = "Imagens/userg.png"
    
    if(event.target !=perfilmenu) {
        perfilmenu.style.display = 'none';
    }
})

function menuL(){
    var menul = document.querySelector('.menul');
    var barrinhas = document.querySelector('.barrinhas');

    if (menul.style.display === 'none') {
        menul.style.display = 'block';}
    
    else {
       menul.style.display = 'none';

    }
}