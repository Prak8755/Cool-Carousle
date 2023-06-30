
const galleryContainer=document.querySelector('.gallery-container');
const galleryControlsContainer=document.querySelector('.gallery-controls');
const galleryControls=['previous','next'];
const galleryItems=document.querySelectorAll('.gallery-item');




// class Carousel {
    
//     constructor(container,items,controls){
//         this.carouselContainer=container;
//         this.CarouselControls=controls;
//         this.carouselArray=[...items];
       

//     }
   
//     updateGallery(){
//         this.carouselArray.forEach((e)=>{
//             e.classList.remove('gallery-item-1');
//             e.classList.remove('gallery-item-2');
//             e.classList.remove('gallery-item-3');
//             e.classList.remove('gallery-item-4');
//             e.classList.remove('gallery-item-5');
//         })
//         this.carouselArray.slice(0,5).forEach((el,i)=>{
// el.classList.add(`gallery-item-${i+1}`)
//         })
//     }

//     setCurrentState(direction){
//         console.log(direction)
//         if(direction.className==='gallery-controls-previous'){
//             this.carouselArray.unshift(this.carouselArray.pop())
//         }
//         else{
//             this.carouselArray.push(this.carouselArray.shift())

//         }
//         this.updateGallery()
//     }

//     setControls(){
// this.CarouselControls.forEach((control)=>{
//     galleryControlsContainer.appendChild(document.createElement('button')).className=`gallery-controls-${control}`;
//     document.querySelector(`.gallery-controls-${control}`).innerText=control;

// })
//     }

//     useControl(){
//         const triggers=[...galleryControlsContainer.childNodes];
//         // console.log(galleryControlsContainer.childNodes)
//         triggers.forEach(control=>{
//             control.addEventListener('click',e=>{
//                 e.preventDefault();
//                 this.setCurrentState(control)
//             })
//         })
//     }
// }



// const exampleCarousel=new Carousel(galleryContainer,galleryItems,galleryControls);
// exampleCarousel.setControls();
// exampleCarousel.useControl();










//1-create button

let galleryData=[...galleryItems]

function buttonCreate(carouselContainer,carouselControls){
  
carouselControls.forEach((control)=>{
        galleryControlsContainer.appendChild(document.createElement('button')).className=`gallery-controls-${control}`;
        document.querySelector(`.gallery-controls-${control}`).innerText=control;
})

const triggers=[...galleryControlsContainer.childNodes];
triggers.forEach(control=>{
    control.addEventListener('click',(e)=>{
        e.preventDefault();
        setCurrentState(control)
    })
})
}

function setCurrentState(direction){
if(direction.className==='gallery-controls-previous'){
    galleryData.unshift(galleryData.pop())
}
else{
    galleryData.push(galleryData.shift())
}
updateGallery()
}

function updateGallery(){
    galleryData.forEach((e)=>{
        e.classList.remove('gallery-item-1');
        e.classList.remove('gallery-item-2');
        e.classList.remove('gallery-item-3');
        e.classList.remove('gallery-item-4');
        e.classList.remove('gallery-item-5');
    })
    galleryData.slice(0,5).forEach((el,i)=>{
el.classList.add(`gallery-item-${i+1}`)
    })
}

buttonCreate(galleryContainer,galleryControls)




