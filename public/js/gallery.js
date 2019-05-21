const current = document.querySelector('#current');
const imgs=document.querySelectorAll('.imgs-gallery img');
const opacity=0.4;

//set 1st image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img =>  img.addEventListener('click', imgClick) );

function imgClick(e){
    //Reset opacity of all images
    imgs.forEach(img => (img.style.opacity=1));
    //change current image to source clicked image
current.src=e.target.src;
// add fading class
current.classList.add('fade-in');
//Remove fade in class in 0.5 sec.
setTimeout(() =>current.classList.remove('fade-in'),500);
// change opacity of var
e.target.style.opacity =opacity;}