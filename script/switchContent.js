function switchInContent() {
    let w1 = document.getElementsByClassName("w1")[0];
    let w2 = document.getElementsByClassName("w2")[0];
    let w3 = document.getElementsByClassName("w3")[0];

    let p1 = document.getElementsByClassName("1p")[0];
    let p2 = document.getElementsByClassName("2p")[0];
    let p3 = document.getElementsByClassName("3p")[0];

    p1.onclick = function () {
        hideAll()
        w1.style.display = "flex";
    }
    p2.onclick = function () {
        hideAll()
        w2.style.display = "flex";
    }
    p3.onclick = function () {
        hideAll()
        w3.style.display = "flex";
    }
}

function hideContent() {
    let w1 = document.getElementsByClassName("w1")[0];
    let w2 = document.getElementsByClassName("w2")[0];
    let w3 = document.getElementsByClassName("w3")[0];

    w1.style.display = "none";
    w2.style.display = "none";
    w3.style.display = "none";
}