import { bd_cards_projetos } from "./../../model/cards_projetos_bd.js";

export function createCards() {
    let cards_section = document.getElementById("cards");

    bd_cards_projetos.map((card_bd) => {
        let card = document.createElement("div");
        card.className = "card";

        if (card_bd.imagem) {
            card.style.backgroundImage = `url(${card_bd.imagem})`;
        }

        let titulo = document.createElement("h1");
        titulo.textContent = card_bd.titulo;

        let preco = document.createElement("h3");
        preco.textContent = card_bd.preco;

        card.appendChild(titulo);
        card.appendChild(preco);

        cards_section.appendChild(card);
    })
}