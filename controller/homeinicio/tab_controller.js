let aberto = false;

function toggleModal() {
  const modal = document.getElementById("modal");

  if (aberto) {
    modal.classList.remove("ativo");

    setTimeout(() => {
      modal.style.display = "none";
    }, 250);

    aberto = false;

  } else {
    modal.style.display = "block";

    setTimeout(() => {
      modal.classList.add("ativo");
    }, 10);

    aberto = true;
  }
}