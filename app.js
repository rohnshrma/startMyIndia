window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})




  const inputs = document.querySelectorAll(".input");
  
  function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
    }
  
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
  
  });


  function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navi = document.querySelector('.navi');
    menuToggle.classList.toggle('active');
    navi.classList.toggle('active');
  }



  // the service section
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      // rotate:0,
      stretch: 0,
      depth: 100,
      // depth:0,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
    delay: 3000,
  },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  });
