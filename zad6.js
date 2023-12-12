let transform = 0;

const items = document.querySelectorAll('.lightbox .images img');

items.forEach(element => {
    element.addEventListener('click', ()=> {
        document.querySelector('.slider').style.transform = `translateX(0)`;
        
        document.querySelector('.galeria').classList.add('active');
        const index = Array.from(items).indexOf(element)
        let transform = 100 * index;
        document.querySelector('.slider').style.transform = `translateX(-${transform}%)`;
        
        if(index == items.length-1){
            document.querySelector('.buttons .right').disabled = true;
        } else document.querySelector('.buttons .right').disabled = false;
        
        if(index == 0){
            document.querySelector('.buttons .left').disabled = true;
        } else document.querySelector('.buttons .left').disabled = false;
    
    })
})

document.querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.galeria').classList.remove('active');
    transform = 0;
    document.querySelector('.slider').style.transform = `translateX(0)`;
})

const nextSlide = () => {
    transform += 100;
    document.querySelector('.slider').style.transform = `translateX(-${transform}%)`;

    if(transform/100 == items.length-1){
        document.querySelector('.buttons .right').disabled = true;
    } else {
        document.querySelector('.buttons .right').disabled = false;
    }
}

document.querySelector('.buttons .right').addEventListener('click', ()=> nextSlide())

