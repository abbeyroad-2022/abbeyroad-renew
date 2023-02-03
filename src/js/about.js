(() => {

    // const actions = {
    //     birdFlies() {
    //         document.querySelector('[data-index="2"] .bird').style.transform = 'translateX(${window.innerWidth}px)' ;
    //     }
    // };

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0];

    for (let i = 0; i < stepElems.length; i++) {
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate(action) {
        currentItem.classList.add('visible');
        // if (action) {
        //     console.log(actions)
        //     actions[action]();
        // }
    }

    function inactivate() {
        currentItem.classList.remove('visible');
    }


    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;

        for (let i = 0; i < stepElems.length; i++) {
            step = stepElems[i];
            boundingRect = step.getBoundingClientRect();

            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {
                   
                inactivate();
                currentItem = graphicElems[step.dataset.index];
                activate(currentItem.dataset.action);
            }           
        }
    });

    var swiper = new Swiper(".about-slider", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
      

      let btn = document.querySelector(".swiper-btn");
      let tr = true
      btn.addEventListener("click",()=>{
        tr = !tr;
        if(tr){
          console.log("움직여")
          swiper.autoplay.start();
        } else {
          console.log("멈춰")
          swiper.autoplay.pause();
        }
      })

    

})();