document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        //var navbar_top = document.getElementById('navbar_top')
        if (window.scrollY > 150) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: false,
  keyboard:true
})

$(document).ready(function () {
    $("body").scrollspy({
        target: "#myNavbar"
    })

});


$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="popover"]').popover(); 
});


   //pur javascript
// document.addEventListener("DOMContentLoaded", function(){
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     var tooltipList = tooltipTriggerList.map(function(element){
//         return new bootstrap.Tooltip(element);
//     });
// });

// document.addEventListener("DOMContentLoaded", function(){
//     var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
//     var popoverList = popoverTriggerList.map(function(element){
//         return new bootstrap.Popover(element);
//     });
// });

$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="popover"]').popover(); 
});


   //pur javascript
// document.addEventListener("DOMContentLoaded", function(){
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     var tooltipList = tooltipTriggerList.map(function(element){
//         return new bootstrap.Tooltip(element);
//     });
// });

// document.addEventListener("DOMContentLoaded", function(){
//     var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
//     var popoverList = popoverTriggerList.map(function(element){
//         return new bootstrap.Popover(element);
//     });
// });

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()