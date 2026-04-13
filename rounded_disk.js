const disk = document.getElementById("disk");
const blur = document.getElementById("spinBlur");

const imagens = [
    "../Assets/icons/disk_1.png",
    "../Assets/icons/disk_2.png",
    "../Assets/icons/disk_3.png"
];

let index = 0;
let rotation = 0;
let speed = 1;

disk.style.backgroundImage = `url('${imagens[0]}')`;

function animateDisk() {
    rotation += speed;

    disk.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(animateDisk);
}

animateDisk();

function trocarDisco() {

    blur.style.opacity = "1";

    let acelerando = setInterval(() => {
        if (speed < 12) {
            speed += 0.5;
        }
    }, 50);

    setTimeout(() => {

        clearInterval(acelerando);

        index++;

        if (index >= imagens.length) index = 0;

        disk.style.backgroundImage = `url('${imagens[index]}')`;

    }, 700);


    setTimeout(() => {

        let desacelerando = setInterval(() => {

            if (speed > 1) {
                speed -= 0.3;
            } else {

                speed = 1;

                blur.style.opacity = "0";

                clearInterval(desacelerando);
            }

        }, 50);

    }, 900);

}

setInterval(trocarDisco, 5000);