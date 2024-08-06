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
});

function telalogin(){
    var btn = document.createElement('img');
    btn.src = "Imagens/userg.png"
    var perfilmenu = document.querySelector('.perfilm');

        if (perfilmenu.style.display === 'block'){
            window.open("https://github.com/Gabe347/tcc-noite/tree/editar", "_self");
        }
        else {
            window.open("https://github.com/Gabe347/tcc-noite/tree/editar", "noopener noreferrer")
        }
    }



