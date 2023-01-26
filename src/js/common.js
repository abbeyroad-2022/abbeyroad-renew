
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

function mainLoaded (){
  let iframes = document.querySelectorAll('iframe');
  let count = 0;

  let $html = document.querySelector('html');
  console.log($html)

  imagesLoaded( $html , function() {
    console.log('all images are loaded');
    setTimeout(function(){
      $html.classList.add("loaded")
    },1000)
    // iframes.forEach((i) => { 
    //   i.addEventListener('load', function () {
    //     count++;
    //     if(count == iframes.length) {
    //       console.log("all iframes are loaded")
    //       $html.classList.add("loaded")
    //     }
    //   });
    // });
  });
}

function headerToggle (){
  let burger = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let tr = false;

  burger.innerHTML = `<span></span><span></span><span></span>`;
  burger.addEventListener("click",function(){
    tr = !tr;
    if(tr){
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }

  })
}

function scrollTop () {
  let body = document.querySelector('body');
  let topBtn = document.createElement("span");
  topBtn.className = "topbtn";
  topBtn.addEventListener("click", function(){
    window.scrollTo(0, 0);
  })
  body.appendChild(topBtn);
}


mainLoaded();
headerToggle();
scrollTop();


let aSkip = document.querySelectorAll("#a_skip a");
let header = document.querySelector(".header");
let last = document.querySelector(".menu-item.last");

aSkip.forEach(function(i){
  i.addEventListener('focus', function(e){
    if(i.href.split("#")[1] == "nav"){         
      //console.log(`${i} in`)       
      header.classList.add("active");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    } else if(i.href.split("#")[1] == "content"){    
      header.classList.remove("active");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }
  });
  i.addEventListener('focusout', function(e){
    if(i.href.split("#")[1] == "content"){          
      //console.log(`${i} out`)       
      header.classList.remove("active");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }
  });
})
last.addEventListener('focusout', function(e){
  header.classList.remove("active"); 
});
