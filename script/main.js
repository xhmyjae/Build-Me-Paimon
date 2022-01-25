function showCharacters(){
   const ctn = document.querySelector('.characters');
   ctn.classList.toggle('open-characters');
}

function disableScrolling(){
   var x=window.scrollX;
   var y=window.scrollY;
   window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
   window.onscroll=function(){};
}


window.addEventListener('load', () => {
   window.scrollTo(0, 0); //scroll to top when reload
   disableScrolling()
   const waiting = 0.5; //time waiting AFTER window is loaded to display
   const loader = document.querySelector('.loader-wrapper');
   loader.classList.add('fondu-out');
   setTimeout(function(){
      loader.style.zIndex = "0";
      enableScrolling()
   }, waiting * 1000); //time in second * 1000
})

