import { getProjects } from "../../services/projects_services.js";


export async function createCards() {
    let cards_section = document.getElementById("cards");

    const bd_cards_projetos = await getProjects();

    bd_cards_projetos.map((card_bd, index) => {
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
        card.appendChild(img);

        cards_section.appendChild(card);
    })
}