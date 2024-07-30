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

// Criar elemento da imagem (menu; userg e userp)
var btn = document.createElement('img');
btn.src = "Imagens/userg.png"

// Menu some ao clicar fora dele
 document.addEventListener('click', e =>{
    if(!perfilmenu.contains(e.target) && e.target !== btn){
        perfilmenu.classList.add('hide');
    }
  })
