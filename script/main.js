function test() {
    console.log("js")
}

function displayChar(){
    let btn = document.querySelector(".char_icon");
    let char = document.querySelector(".characters");
    btn.addEventListener('click', function (){
        char.style.display = "flex";
    })
}