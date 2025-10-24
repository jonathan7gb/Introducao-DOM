const header = document.getElementById('cabecalho')
console.log(header);

const gridSections = document.getElementsByClassName('grid-section')
console.log(gridSections);
console.log(gridSections[0]);

const imagens = document.querySelectorAll('img')
console.log(imagens);
console.log(imagens.length);

const paragrafo = document.querySelector(".grid-section p")
console.log(paragrafo);

const link = document.querySelector('#contato a')
console.log(link);

const h2s = document.querySelectorAll('h2')
console.log(h2s);

const desafio = document.querySelectorAll('footer p' || 'main p')
console.log(desafio);

h2s.forEach(n => {
    console.log(n.innerText);
})