



window.addEventListener('load', (e) => {
    scrollIn("js-scrollIn");
    clickHidden("js-hidden");
    scrollInOut("js-scrollInOut");
    modal("js-modal");
    classAdd("js-load");
    modalClose("js-modalClose");
    modalMove("js-modalMove");
  });
  
  window.addEventListener('resize', (e) => {
    scrollIn("js-scrollIn");
    scrollInOut("js-scrollInOut");
  });
  window.addEventListener('scroll', (e) => {
    scrollIn("js-scrollIn");
    scrollInOut("js-scrollInOut");
  },{passive: true});
  
  
  
// splide
// ------------------------------------------------------------
document.addEventListener( "DOMContentLoaded", function() {
    var splide01 = new Splide(".splide01",{
      type   : 'loop',
        perPage: 5,
        perMove: 1,
        arrows: true,
        autoplay: true,
        interval: 5000,
        breakpoints: {
            768: {
                destroy: true,
            },
      }
    } );
    splide01.mount();

    var splide02 = new Splide(".splide02",{
        destroy: true,
        type   : 'loop',
        width : '80%',
        perPage: 1,
        perMove: 1,
        arrows: true,
        breakpoints: {
            768: {
                destroy: false,
            },
      }
    } );
    splide02.mount();
} );
  

  // scrollIn
  // ------------------------------------------------------------
  const scrollIn = (Class) =>{
    const targetsClass  = document.getElementsByClassName(Class);
    const targetsArr    = Array.from(targetsClass);
    targetsArr.forEach(function(target){
        let targetRelative = (window.innerHeight) - target.getBoundingClientRect().top;
  
        if(targetRelative > 0){
          target.classList.add("is-active");
        }
    });
  }

  // classAdd
  // ------------------------------------------------------------
  const classAdd = (Class) =>{
    const targetsClass  = document.getElementsByClassName(Class);
    const targetsArr    = Array.from(targetsClass);
    targetsArr.forEach(function(target){
      target.classList.add("is-active");
    });
  }
  
  
  // scrollInOut
  // ------------------------------------------------------------
  const scrollInOut = (Class) =>{
    const thisClass  = document.getElementsByClassName(Class);
    const thisArr    = Array.from(thisClass);
  
    thisArr.forEach(function(target){
        let targetRelative = (window.innerHeight) - target.getBoundingClientRect().top;
        let windowHeight   = window.innerHeight;
  
        if(targetRelative > windowHeight * 0.1){
          target.classList.add("is-active");
        }else{
          target.classList.remove("is-active");
        }
    });
  }
  
  // clickHidden
  // ------------------------------------------------------------
  const clickHidden = (Class) =>{
    const thisClass  = document.getElementsByClassName(Class);
    const thisArr    = Array.from(thisClass);
  
    thisArr.forEach(function(target){
      target.addEventListener("click", () => {
        target.classList.add("is-hidden");
      });
    });
  }
  
  
  
  // modal
  // ------------------------------------------------------------
  const modal = (Class) =>{
    const thisClass  = document.getElementsByClassName(Class);
    const thisArr    = Array.from(thisClass);
  
    thisArr.forEach(function(isClass){
      isClass.onclick = function(){
  
        const target      = isClass.getAttribute("data-modal");
        const targetClass = document.getElementsByClassName(target);
        const targetArr   = Array.from(targetClass);
  
        targetArr.forEach(function(isTarget){
          isTarget.classList.toggle("is-open");
          console.log(isTarget);
        });
      }
    });
  }
  
  
  
  // modalClose
  // ------------------------------------------------------------
  const modalClose = (Class) =>{
    const thisClass  = document.getElementsByClassName(Class);
    const thisArr    = Array.from(thisClass);
  
    thisArr.forEach(function(isClass){
      isClass.onclick = function(){
        const target      = isClass.getAttribute("data-modalClose");
        const targetClass = document.getElementsByClassName(target);
        const targetArr   = Array.from(targetClass);
  
        targetArr.forEach(function(isTarget){
          isTarget.classList.remove("is-open");
          console.log(isTarget);
        });
      }
    });
  }
  
    
  // modalMove
  // ------------------------------------------------------------
  const modalMove = (Class) =>{
    const thisClass  = document.getElementsByClassName(Class);
    const thisArr    = Array.from(thisClass);
  
    thisArr.forEach(function(isClass){
      isClass.onclick = function(){
        const removeTarget      = isClass.getAttribute("data-modalClose");
        const removeTargetClass = document.getElementsByClassName(removeTarget);
        const removeTargetArr   = Array.from(removeTargetClass);
  
        removeTargetArr.forEach(function(isTarget){
          isTarget.classList.remove("is-open");
          console.log(isTarget);
        });

        const target      = isClass.getAttribute("data-modal");
        const targetClass = document.getElementsByClassName(target);
        const targetArr   = Array.from(targetClass);
  
        targetArr.forEach(function(isTarget){
          isTarget.classList.toggle("is-open");
          console.log(isTarget);
        });
      }
    });
  }
  
  