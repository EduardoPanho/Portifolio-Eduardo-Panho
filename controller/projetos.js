import { createCards } from "./cards_controller.js";
import {girarBanner} from "./banner_controller.js";

window.girarBanner = girarBanner;

document.addEventListener("DOMContentLoaded", ()=> {
    createCards();
})