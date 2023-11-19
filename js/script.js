let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-header__safety-box');
let body = document.querySelector('.body');


   burger.onclick = function () {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('active')
   }



