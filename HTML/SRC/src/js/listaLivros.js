(async (win, doc)=>{
    let divs = doc.querySelectorAll('.livros div aside div');

   async function buscaData(){
       let data = []; 
    let xhr = new XMLHttpRequest();
    xhr.open('get', '/src/data/bd.json');

    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = async ()=>{
        if (xhr.readyState==4){
            localStorage.setItem('dados',await xhr.responseText);
        }
    }
    xhr.send()
    }
    buscaData();

    let livros = JSON.parse(localStorage.getItem('dados'));

    function createImg() {
        let img = doc.createElement('img');
        return img;
    }
    livros.forEach((livro, i) => {
        if(i==0) {
            doc.querySelector('.destaque div div').innerHTML += `<div class="carousel-item active">
             <img src="${livro.img}" class="d-block" alt="foto-livro">
            </div>`;
        }else{
        doc.querySelector('.destaque div div').innerHTML += `<div class="carousel-item">
        <img src="${livro.img}" class="d-block" alt="foto-livro">
      </div>`;
        }
    });
    livros.forEach((livro, i) => {
        let img = createImg();
        img.src = livro.img;
        img.alt = livro.titulo;

        divs[i].dataset.titulo = livro.titulo;
        divs[i].querySelector('.cabecalho1 h4').innerText = livro.titulo;

        divs[i].querySelector('.cabecalho1 h5').innerText = livro.autor;

        divs[i].appendChild(img);
    });
    
    divs.forEach(div => {
       div.addEventListener('click', () => {
        localStorage.setItem('selected',JSON.stringify(div.dataset.titulo));
        div.innerHTML += '<a href="./src/page/venda.html" style="display: "block";"></a>';
        div.querySelector('a').click();
       }); 
    });
})(window, document);