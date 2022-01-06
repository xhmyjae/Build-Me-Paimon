function showCharacters(){
   const ctn = document.querySelector('.characters');
   ctn.classList.toggle('open-characters');
}


window.addEventListener('load', () => {
   const loader = document.querySelector('.loader-wrapper');
   loader.classList.add('fondu-out');
})


