const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    if (botao.href === window.location.href) {
        botao.classList.add('botao-ativo');
    }
});

const imagensPorPagina = {
    favoritos: [
        '../Images/favoritos/hamburguer1.png', '../Images/favoritos/hamburguer2.png', '../Images/favoritos/bolo chocolate.png',
        '../Images/favoritos/bolo red.png', '../Images/favoritos/feijoada.png', '../Images/favoritos/lasanha.png',
        '../Images/favoritos/strogonoff de frango.png', '../Images/favoritos/mousse de chocolate.png', '../Images/favoritos/hambúrguer9.png'
    ],
    comidasdiversas: [
        '../Images/comidasdiversas/feijoada.png', '../Images/comidasdiversas/lasanha.png', '../Images/comidasdiversas/Strogonoff de frango.png',
        '../Images/comidasdiversas/carne.png', '../Images/comidasdiversas/parmegiana.png', '../Images/comidasdiversas/peixe.png',
        '../Images/comidasdiversas/espetinho.png', '../Images/comidasdiversas/porções.png', '../Images/comidasdiversas/macarrao.png'
    ],
    bebidas: [
        '../Images/bebidas/caipirinhamorango.png', '../Images/bebidas/caipirinhalimao.png', '../Images/bebidas/caipirinhamaracuja.png',
        '../Images/bebidas/sucolaranja.png', '../Images/bebidas/leitemorango.png', '../Images/bebidas/morangomaracuja.png',
        '../Images/bebidas/fantalaranja.png', '../Images/bebidas/fantauva.png', '../Images/bebidas/coca.png'
    ],
    sobremesas: [
        '../Images/sobremesas/Mousse de chocolate.png', '../Images/sobremesas/bolo red.png', '../Images/sobremesas/bolo chocolate.png',
        '../Images/sobremesas/pudimchocolate.png', '../Images/sobremesas/pudimmanga.png', '../Images/sobremesas/tortalimao.png',
        '../Images/sobremesas/tortamorango.png', '../Images/sobremesas/cupkaques.png', '../Images/sobremesas/churros.png'
    ],
    hamburgueres: [
        '../Images/hamburgueres/hamburguer1.png', '../Images/hamburgueres/hamburguer2.png', '../Images/hamburgueres/hamburguer3.png',
        '../Images/hamburgueres/hamburguer4.png', '../Images/hamburgueres/hamburguer5.png', '../Images/hamburgueres/hamburguer6.png',
        '../Images/hamburgueres/hamburguer7.png', '../Images/hamburgueres/hamburguer8.png', '../Images/hamburgueres/hamburguer9.png'
    ]
}



const pagina = document.body.className;

const imagens = document.querySelectorAll('.grid-imagens img');
imagens.forEach((img, index) => {
    img.src = imagensPorPagina[pagina][index];
});


/*descrições das comidas*/
document.querySelectorAll('.imagem-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const nome = encodeURIComponent(this.dataset.nome);
        const desc = encodeURIComponent(this.dataset.desc);
        const img = encodeURIComponent(this.dataset.img);

        // redireciona para a mesma página de descrição, passando os dados
        window.location.href = `pedido.html?nome=${nome}&desc=${desc}&img=${img}`;
    });
});

/*carrinho de compras*/
let contador = localStorage.getItem('carrinho') || 0;
document.getElementById('contador').innerText = contador;

document.querySelectorAll('#botao-adicionar-no-carrinho').forEach(botao => {
    botao.addEventListener('click', function () {
        contador++;
        localStorage.setItem('carrinho', contador);
        document.getElementById('contador').innerText = contador;
    });
});

// campo de pesquisa
function buscar() {
    const termo = document.getElementById("campo-pesquisa").value.toLowerCase();
    const itens = document.querySelectorAll("#lista-itens a");

    itens.forEach(item => {
        const texto = item.textContent.toLowerCase();
        item.style.display = texto.includes(termo) ? "list-item" : "none";
    });
}



