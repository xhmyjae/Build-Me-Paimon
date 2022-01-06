function showCharacters(){
   const ctn = document.querySelector('.characters');
   ctn.classList.toggle('open-characters');
}


window.addEventListener('load', () => {
   const waiting = 0.5; //time waiting AFTER window is loaded to display
   const loader = document.querySelector('.loader-wrapper');
   loader.classList.add('fondu-out');
   setTimeout(function(){
      loader.style.zIndex = "1";
   }, waiting * 1000); //time in second * 1000
})


