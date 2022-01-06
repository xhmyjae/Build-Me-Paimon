function switchInContent() {
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");
    let b7 = document.getElementById("b7");
    let b8 = document.getElementById("b8");
    let b9 = document.getElementById("b9");
    let b10 = document.getElementById("b10");
    let b11 = document.getElementById("b11");
    let b12 = document.getElementById("b12");
    let b13 = document.getElementById("b13");
    let b14 = document.getElementById("b14");

    let b1Cont = document.getElementsByClassName("artifacts_set1")[0];
    let b2Cont = document.getElementsByClassName("artifacts_set2")[0];
    let b3Cont = document.getElementsByClassName("ascensionMats")[0];
    let b4Cont = document.getElementsByClassName("talentsMats")[0];
    let b5Cont = document.getElementsByClassName("talent1")[0];
    let b6Cont = document.getElementsByClassName("talent2")[0];
    let b7Cont = document.getElementsByClassName("talent3")[0];
    let b8Cont = document.getElementsByClassName("talentPass")[0];
    let b9Cont = document.getElementsByClassName("constellation1")[0];
    let b10Cont = document.getElementsByClassName("constellation2")[0];
    let b11Cont = document.getElementsByClassName("constellation3")[0];
    let b12Cont = document.getElementsByClassName("constellation4")[0];
    let b13Cont = document.getElementsByClassName("constellation5")[0];
    let b14Cont = document.getElementsByClassName("constellation6")[0];

    b1.onclick = function () {
        changeArtButtons()
        b1.src = "../images/icons/page_checked.png";
        b1Cont.style.display = "flex";
    }
    b2.onclick = function () {
        changeArtButtons()
        b2.src = "../images/icons/page_checked.png";
        b2Cont.style.display = "flex";
    }
    b3.onclick = function () {
        changeMatButtons()
        document.getElementsByClassName("matName")[0].innerHTML = "Ascension";
        b3.src = "../images/icons/page_checked.png";
        b3Cont.style.display = "block";
    }
    b4.onclick = function () {
        changeMatButtons()
        document.getElementsByClassName("matName")[0].innerHTML = "Talents";
        b4.src = "../images/icons/page_checked.png";
        b4Cont.style.display = "block";
    }
    b5.onclick = function () {
        changeTalButtons()
        b5.src = "../images/icons/page_checked.png";
        b5Cont.style.display = "flex";
    }
    b6.onclick = function () {
        changeTalButtons()
        b6.src = "../images/icons/page_checked.png";
        b6Cont.style.display = "flex";
    }
    b7.onclick = function () {
        changeTalButtons()
        b7.src = "../images/icons/page_checked.png";
        b7Cont.style.display = "flex";
    }
    b8.onclick = function () {
        changeTalButtons()
        b8.src = "../images/icons/page_checked.png";
        b8Cont.style.display = "flex";
    }
    b9.onclick = function () {
        changeConstButtons()
        b9.src = "../images/icons/page_checked.png";
        b9Cont.style.display = "flex";
    }
    b10.onclick = function () {
        changeConstButtons()
        b10.src = "../images/icons/page_checked.png";
        b10Cont.style.display = "flex";
    }
    b11.onclick = function () {
        changeConstButtons()
        b11.src = "../images/icons/page_checked.png";
        b11Cont.style.display = "flex";
    }
    b12.onclick = function () {
        changeConstButtons()
        b12.src = "../images/icons/page_checked.png";
        b12Cont.style.display = "flex";
    }
    b13.onclick = function () {
        changeConstButtons()
        b13.src = "../images/icons/page_checked.png";
        b13Cont.style.display = "flex";
    }
    b14.onclick = function () {
        changeConstButtons()
        b14.src = "../images/icons/page_checked.png";
        b14Cont.style.display = "flex";
    }
}

function changeArtButtons() {
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");

    let b1Cont = document.getElementsByClassName("artifacts_set1")[0];
    let b2Cont = document.getElementsByClassName("artifacts_set2")[0];

    b1.src = "../images/icons/page.png";
    b2.src = "../images/icons/page.png";
    b1Cont.style.display = "none";
    b2Cont.style.display = "none";
}

function changeMatButtons() {
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");

    let b3Cont = document.getElementsByClassName("ascensionMats")[0];
    let b4Cont = document.getElementsByClassName("talentsMats")[0];

    b3.src = "../images/icons/page.png";
    b4.src = "../images/icons/page.png";
    b3Cont.style.display = "none";
    b4Cont.style.display = "none";
}

function changeTalButtons() {
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");
    let b7 = document.getElementById("b7");
    let b8 = document.getElementById("b8");

    let b5Cont = document.getElementsByClassName("talent1")[0];
    let b6Cont = document.getElementsByClassName("talent2")[0];
    let b7Cont = document.getElementsByClassName("talent3")[0];
    let b8Cont = document.getElementsByClassName("talentPass")[0];

    b5.src = "../images/icons/page.png";
    b6.src = "../images/icons/page.png";
    b7.src = "../images/icons/page.png";
    b8.src = "../images/icons/page.png";
    b5Cont.style.display = "none";
    b6Cont.style.display = "none";
    b7Cont.style.display = "none";
    b8Cont.style.display = "none";
}

function changeConstButtons() {
    let b9 = document.getElementById("b9");
    let b10 = document.getElementById("b10");
    let b11 = document.getElementById("b11");
    let b12 = document.getElementById("b12");
    let b13 = document.getElementById("b13");
    let b14 = document.getElementById("b14");

    let b9Cont = document.getElementsByClassName("constellation1")[0];
    let b10Cont = document.getElementsByClassName("constellation2")[0];
    let b11Cont = document.getElementsByClassName("constellation3")[0];
    let b12Cont = document.getElementsByClassName("constellation4")[0];
    let b13Cont = document.getElementsByClassName("constellation5")[0];
    let b14Cont = document.getElementsByClassName("constellation6")[0];

    b9.src = "../images/icons/page.png";
    b10.src = "../images/icons/page.png";
    b11.src = "../images/icons/page.png";
    b12.src = "../images/icons/page.png";
    b13.src = "../images/icons/page.png";
    b14.src = "../images/icons/page.png";

    b9Cont.style.display = "none";
    b10Cont.style.display = "none";
    b11Cont.style.display = "none";
    b12Cont.style.display = "none";
    b13Cont.style.display = "none";
    b14Cont.style.display = "none";
}