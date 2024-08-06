function myFunction(x) {
    x.classList.toggle("mudar");
}

 function perfilMenu(){
    var perfilmenu = document.querySelector('.perfilm');
    if (perfilmenu.style.display === 'none') {
        perfilmenu.style.display = 'block';}
    
    else {
       perfilmenu.style.display = 'none';
       window.open("https://github.com/Gabe347/tcc-noite")
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





