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

charaNavBar()