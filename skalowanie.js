function resize(){
var navWysokosc = document.querySelector('.nav').clientHeight;
var galeriaWysokosc = document.querySelector('.container-galeria').clientHeight;
var content = document.querySelector(".content");
var content2 = document.querySelector('#napis-galeria-bg');
var content3 = document.querySelector('#tekst-galeria');
content.style.transform="translateY(" +navWysokosc +"px)";
content2.style.height=galeriaWysokosc +"px";
content3.style.height=galeriaWysokosc +"px";
}

window.onload = resize;
window.onresize = resize;