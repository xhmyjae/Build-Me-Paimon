function charaNavBar() {
    let nav = document.createElement("ul");
    nav.setAttribute("class", "header_navchara");

    const charaIcons = ["Lore", "Weapons", "Artifacts", "Materials", "Talents", "Constellations"];
    const linksIcons = ["Icon_Inventory_Quest.png", "Icon_Inventory_Weapons.png", "Icon_Inventory_Artifacts.png", "Icon_Inventory_Materials.png", "Icon_Inventory_Gadget.png", "Icon_Inventory_Precious_Items.png"];

    for (let i = 0; i < charaIcons.length; i++) {
        let icons = document.createElement("li");
        icons.setAttribute("class", "icon_navchara");
        icons.setAttribute("id", charaIcons[i]);

        let img = document.createElement("img");
        img.setAttribute("src", "../images/icons/"+linksIcons[i]);
        img.setAttribute("title", charaIcons[i]);
        img.setAttribute("alt", charaIcons[i]);

        icons.appendChild(img);
        nav.appendChild(icons);
    }

    let content = document.getElementById("content");
    let text = document.getElementById("text");
    content.insertBefore(nav, text);
}


function switchContent() {
    let lore = document.getElementById("Lore");
    let weapons = document.getElementById("Weapons");
    let artifacts = document.getElementById("Artifacts");
    let materials = document.getElementById("Materials");
    let talents = document.getElementById("Talents");
    let constellations = document.getElementById("Constellations");

    let loreCont = document.getElementsByClassName("lore")[0];
    let weaponsCont = document.getElementsByClassName("weaponsContent")[0];
    let artifactsCont = document.getElementsByClassName("artifacts")[0];
    let materialsCont = document.getElementsByClassName("materials")[0];
    let talentsCont = document.getElementsByClassName("talents")[0];
    let constellationsCont = document.getElementsByClassName("constellations")[0];

    let b1 = document.getElementById("b1");
    let b1Cont = document.getElementsByClassName("artifacts_set1")[0];

    let b3 = document.getElementById("b3");
    let b3Cont = document.getElementsByClassName("ascensionMats")[0];

    let b5 = document.getElementById("b5");
    // let b5Cont = document.getElementsByClassName("artifacts_set1")[0];


    lore.onclick = function () {
        hideAll()
        loreCont.style.display = "flex";
    }
    weapons.onclick = function () {
        hideAll()
        weaponsCont.style.display = "flex";
    }
    artifacts.onclick = function () {
        hideAll()
        artifactsCont.style.display = "flex";
        changeArtButtons()
        b1.src = "../images/icons/page_checked.png";
        b1Cont.style.display = "flex";
    }
    materials.onclick = function () {
        hideAll()
        materialsCont.style.display = "flex";
        changeMatButtons()
        b3.src = "../images/icons/page_checked.png";
        b3Cont.style.display = "flex";
    }
    talents.onclick = function () {
        hideAll()
        talentsCont.style.display = "flex";
        changeTalButtons()
        b5.src = "../images/icons/page_checked.png";
        //b5Cont.style.display = "flex";
    }
    constellations.onclick = function () {
        hideAll()
        constellationsCont.style.display = "flex";
    }
}

function hideAll() {
    let loreCont = document.getElementsByClassName("lore")[0];
    let weaponsCont = document.getElementsByClassName("weaponsContent")[0];
    let artifactsCont = document.getElementsByClassName("artifacts")[0];
    let materialsCont = document.getElementsByClassName("materials")[0];
    let talentsCont = document.getElementsByClassName("talents")[0];
    let constellationsCont = document.getElementsByClassName("constellations")[0];

    loreCont.style.display = "none";
    weaponsCont.style.display = "none";
    artifactsCont.style.display = "none";
    materialsCont.style.display = "none";
    talentsCont.style.display = "none";
    constellationsCont.style.display = "none";
}

window.onload = function () {
    charaNavBar()
    switchContent()
    switchInContent()
}