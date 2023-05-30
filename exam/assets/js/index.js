const rows= document.querySelector('.rows');
fetch('https://646bb5f17d3c1cae4ce43044.mockapi.io/exam').then(resp=>resp.json()).then(json=>{
    json.forEach(el => {
        rows.innerHTML+=`<div class="card mb-3 mt-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${el.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title mt-3">${el.tittle}</h3>
              <p class="card-text mt-3"><small class="text-body-secondary">${el.date}</small></p>
              <p class="card-text mt-3">${el.about}</p>
            </div>
          </div>
        </div>
      </div>`
    });
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
  });