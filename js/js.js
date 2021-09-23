const animalsBtn = document.querySelector('.animals');
const citiesBtn = document.querySelector('.cities');
const rainyBtn = document.querySelector('.rainy');
const othersBtn = document.querySelector('.others');
const showAllBtn = document.querySelector('.show-all');
const allImages = document.querySelectorAll('figure');
const wrapper = document.querySelector('.container');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const closeBtn = document.querySelector('.close');


//invert images with hover //

allImages.forEach(function(img){
    img.addEventListener('mouseenter',function(){
        allImages.forEach(function(filterImage){
            filterImage.style.filter="invert(100%)";
        });
        this.style.filter="invert(0)";
    })
})

// leave mouse //
wrapper.addEventListener('mouseleave',function(){
    allImages.forEach(function(img){
        img.style.filter="invert(0)";
    })
})


//filter images//

//filter animals'image

animalsBtn.addEventListener('click',function(){
    allImages.forEach(function(img){
       if(img.classList.contains('animals')){
           img.style.display="block";
       }else{
           img.style.display="none";
       }
    })
})
//filter animals'image

animalsBtn.addEventListener('click',function(){
    allImages.forEach(function(img){
       if(img.classList.contains('animals')){
           img.style.display="block";
       }else{
           img.style.display="none";
       }
    })
})

//filter cities'image

citiesBtn.addEventListener('click',function(){
    allImages.forEach(function(img){
       if(img.classList.contains('cities')){
           img.style.display="block";
       }else{
           img.style.display="none";
       }
    })
})


//filter rainy image

rainyBtn.addEventListener('click',function(){
    allImages.forEach(function(img){
       if(img.classList.contains('rainy')){
           img.style.display="block";
       }else{
           img.style.display="none";
       }
    })
})

//filter others'image

othersBtn.addEventListener('click',function(){
    allImages.forEach(function(img){
       if(img.classList.contains('others')){
           img.style.display="block";
       }else{
           img.style.display="none";
       }
    })
})

//show all images //

showAllBtn.addEventListener('click',function(){
    allImages.forEach(function(img){
    img.style.display="block";
    })
})

// modal //

allImages.forEach(function(img){
   img.addEventListener('click',function(e){
       modal.style.transform="scale(1)";
       const thisImageSrc=img.children[0].getAttribute('src');
       modal.children[0].setAttribute('src',thisImageSrc);
   
        // mouse position
       modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
          
   })
})

//close modal //
 
modal.addEventListener('click',function(){
    this.style.transform="scale(0)";
    modalImg.style.transform = `rotate(0)`;
})

modalImg.addEventListener('click', function (e) {
    e.stopPropagation();
  });


closeBtn.addEventListener('click',function(){
    modal.style.transform="scale(0)";
})  

// rotate image in modal//
modalImg.addEventListener('mousemove', function (e) {
    let rotateY = e.offsetX / 10 - this.width / 20;
    let rotateX = -(e.offsetY / 10 - this.height / 20);

    modalImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
  });