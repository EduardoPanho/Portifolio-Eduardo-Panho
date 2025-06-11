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

        let img = document.createElement('img');
        img.src = card_bd.img;
        
        let titulo = document.createElement("h1");
        titulo.textContent = card_bd.titulo;

        let data = document.createElement("h3");
        data.textContent = card_bd.data;

        card.appendChild(titulo);
        card.appendChild(data);
        card.appendChild(img);

        cards_section.appendChild(card);
    })
}