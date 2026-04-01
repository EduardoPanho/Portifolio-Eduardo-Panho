let aberto = false;

function toggleModal() {
  const modal = document.getElementById("modal");
  const footerCenter = document.querySelector(".footer-center");

  if (aberto) {
    modal.classList.remove("ativo");

    setTimeout(() => {
      modal.style.display = "none";
    }, 250);

    footerCenter.classList.remove("modal-aberto");

    aberto = false;

  } else {
    modal.style.display = "block";

    setTimeout(() => {
      modal.classList.add("ativo");
    }, 10);

    footerCenter.classList.add("modal-aberto");

    aberto = true;
  }
}