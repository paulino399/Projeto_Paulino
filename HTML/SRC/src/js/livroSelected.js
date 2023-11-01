((win, doc) => {
    let data = localStorage.getItem('dados');
    function createImg() {
        let img = doc.createElement('img');
        return img;
    }

    JSON.parse(data).forEach(livro => {
        if (livro.titulo === JSON.parse(localStorage.getItem('selected'))){
            let input = doc.querySelectorAll('.form');
            let img = createImg()
            img.src = livro.img.replace(/\.\/src/gi, '..');
            img.alt = livro.titulo;
            input[0].value = livro.titulo;
            input[1].value = livro.autor;
            doc.querySelector('.livros div aside .img ').appendChild(img);
            doc.querySelector('.livros div aside .descrition ').innerHTML = livro.descricao;
            doc.querySelector('.livros div aside .descrition ').innerHTML += `<span><strong>Ano:</strong> ${livro.ano}</span>`;
            
        }
    });
})(window, document);