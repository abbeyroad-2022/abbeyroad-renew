
      let list = document.querySelector('#masonry-grid');
      let items = document.querySelectorAll('.grid-item');
      let filters = document.querySelectorAll('#grid-filter li');
      let toggleBtn = document.querySelector('.toggle-btn');
      let tr = false;

      toggleBtn.addEventListener("click", function(e){
        tr = !tr;
        if(tr){
          e.target.classList.add("on")
          document.querySelector('#grid-filter').style.display = "block";
        } else {
          e.target.classList.remove("on")
          document.querySelector('#grid-filter').style.display = "none";
        }
      })

      imagesLoaded( list, function() {
        var msnry = new Masonry( list, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
        });

        filters.forEach(function(i){ 
          i.addEventListener("click",function(e){
            filters.forEach(function(i){
              i.classList.remove("on")
            })
            e.target.classList.add("on");

            let category = e.target.getAttribute("data-category");
            if(category == "*"){
              items.forEach(function(i) { 
                i.style.display = "block"
              })
              msnry.layout();
            } else if(category !== ""){
              items.forEach(function(i) { 
                if(i.classList.contains(category)){
                  i.style.display = "block"
                } else {
                  i.style.display = "none"
                }
              })
              msnry.layout();
            } else {
              items.forEach(function(i) { 
                i.style.display = "block"
              })
              msnry.layout();
            }
          })
        })
      });
