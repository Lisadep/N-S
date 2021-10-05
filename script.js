// Menu Hamburger


"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  /* MENU */
  const LeMenu = document.getElementById("LeMenu");
  const CmdMenu = document.getElementById("CmdMenu");
  CmdMenu.addEventListener('click',function(){
    LeMenu.style.display = (LeMenu.style.display == 'none')? '':'none';
  });
  // au chargement de la page
  window.onload = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };
  // au redimensionnement de la fenêtre
  window.onresize = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };

});


// Produit Choisi


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


// Ajouter aux favoris

