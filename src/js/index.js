 // import Swiper JS
 import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';
 

 const swiper = new Swiper(".swiper", 
 {navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  speed: 400,
    spaceBetween: 30,
    slidesPerView: 5,
    });

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    item.querySelector(".faq-item-header").addEventListener("click", toggleFaq);


})

function toggleFaq(event){
    console.log("ffffffff")

   const currentFaqItem =  event.target.closest(".faq-item");

   const currentArrowBtn = currentFaqItem.querySelector(".faq-item-btn");

   const currentFaqItemContent = currentFaqItem.querySelector(".faq-item-content");

   currentArrowBtn.classList.toggle("opened");

   currentFaqItem.classList.toggle("opened");

   

}


