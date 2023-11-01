(async (win, doc)=>{
    let hamburguer = doc.querySelector('.hamburguer');
    
    hamburguer.addEventListener('click', (evt) => {
     let classe = doc.querySelector('.cabecalho').className.split(' ');
     let divs = doc.querySelectorAll('.hamburguer div');
     if (classe.indexOf('extends') == -1) {
         doc.querySelector('.cabecalho').classList.add('extends');
         divs[0].classList.add('first');
         divs[1].classList.add('menu-items');
         divs[2].classList.add('last');
     }else{
         doc.querySelector('.cabecalho').classList.remove('extends');
         
         divs[0].classList.remove('first');
         divs[1].classList.remove('menu-items');
         divs[2].classList.remove('last');
     }
 });
 
 })(window, document);