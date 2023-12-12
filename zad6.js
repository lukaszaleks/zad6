let transform = 0;

const items = document.querySelectorAll('.lightbox .images img');
const gallery = document.querySelector('.galeria');
const closeButton = document.querySelector('.close');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

const setTransform = element => {
    gallery.classList.add('active');
    closeButton.addEventListener('click', ()=> gallery.classList.remove('active'));

    const index = Array.from(items).indexOf(element);
    transform = 0;
    transform = 100 * index;    

    if(index === 0){
        prevButton.disabled = true;
    } else prevButton.disabled = false; 
    
    if(index === items.length-1){
        nextButton.disabled = true;
    } else nextButton.disabled = false; 

    slider.style.transform = `translateX(-${transform}%)`;
}

const prevSlide = () => {
    transform -= 100;
    console.log(transform);
    slider.style.transform = `translateX(-${transform}%)`

    if(transform/100 === 0){
        prevButton.disabled = true;
    } else prevButton.disabled = false;

    if(transform/100 === items.length-1){
        nextButton.disabled = true;
    } else nextButton.disabled = false;
}

const nextSlide = () => {
    transform += 100;
    console.log(transform);
    slider.style.transform = `translateX(-${transform}%)`

    if(transform/100 === items.length-1){
        nextButton.disabled = true;
    } else nextButton.disabled = false;

    if(transform/100 === 0){
        prevButton.disabled = true;
    } else prevButton.disabled = false;
}

items.forEach(item => {
    item.addEventListener('click', ()=> setTransform(item))
})


prevButton.addEventListener('click', ()=> prevSlide());
nextButton.addEventListener('click', ()=> nextSlide());
