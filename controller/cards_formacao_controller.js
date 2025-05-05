import { bd_cards_formacao } from "./../model/cards_formacao_bd.js";

export function createCards() {
    const cards_section = document.getElementById("cards");


    const colunaEsquerda = document.createElement("div");
    colunaEsquerda.className = "coluna-esquerda";

    const colunaDireita = document.createElement("div");
    colunaDireita.className = "coluna-direita";

    bd_cards_formacao.forEach((card_bd, index) => {
        const card = document.createElement("div");
        card.className = "card";

        if (card_bd.imagem) {
            card.style.backgroundImage = `url(${card_bd.imagem})`;
        }
        
        const titulo = document.createElement("h1");
        titulo.textContent = card_bd.titulo;
    
        const preco = document.createElement("h3");
        preco.textContent = card_bd.preco;
    
        card.appendChild(titulo);
        card.appendChild(preco);
    
        if (index % 2 === 0) {
            colunaEsquerda.appendChild(card);
        } else {
            colunaDireita.appendChild(card);
        }

        cards_section.appendChild(card);
    });
}
