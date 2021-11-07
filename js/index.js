// To Play de Sound

const playSound = (e) => {
    const audio = document.querySelector(`#${e.key}`);
    const key = document.querySelector(`.${e.key}`);
    const uppercaseKey = e.key.toUpperCase();
    document.querySelector(`.${e.key}-gato`).src = `./assets/img/${uppercaseKey}2.png`;
    if (!audio) return;
    audio.currentTime = 0; // this will rewind de audio
    audio.play();
    key.classList.add("playing");
}

// To Remove the CSS class

function removeTransition(e) {
    if(e.propertyName !== "transform") return; // Skips if it's not a transform
    this.classList.remove("playing");
    const gatosParent = this.parentNode;
    const gatosHijos = gatosParent.firstElementChild;
    const gato = gatosHijos.firstElementChild;
    const letra = e.target.firstElementChild.innerHTML;
    gato.src = `./assets/img/${letra}1.png`;

}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// Event Listener

window.addEventListener("keypress", playSound);


