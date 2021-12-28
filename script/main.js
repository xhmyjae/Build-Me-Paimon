var target = document.querySelector(".characters");
var icon = document.querySelector(".char_icon");
icon.addEventListener("mouseover", mOver, false);
//ligne dessous servira une fois que le dropdown remontera
// (pour le faire remonter meme si l'icon est leave, pas que si .characters est leave)
// icon.addEventListener("mouseout", mOut, false);
target.addEventListener("mouseleave", mOut, false);

function mOver() {
    //si ligne dessous (=enlever css ligne 131) : display mais ne s'enleve pas (logique)
    // target.setAttribute("style", "display:flex; flex-flow: wrap;")
    target.classList.remove('reverse-dropdown')
    target.classList.add('test-dropdown')
}

function mOut() {
    target.classList.remove('test-dropdown') //enlever l'animation (éviter les colisions?)
    target.classList.add('reverse-dropdown') //probleme : se replie pas alors que l'icon oui (source : display: none?)
    // icon.classList.add('reverse-dropdown') //pour les test : sortie de .characters = replie de l'icon
}


//NOTES (pas faire attention)
// when icon is over, characters has :
// display: flex;
// flex-flow: wrap;
// text-decoration: none;

// target.setAttribute("style", "display:none;")
