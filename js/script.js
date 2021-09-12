window.addEventListener('load', function () {
    'use strict';

    //burger
    
    const burgerTrigger = this.document.querySelector('.burger-menu'),
          body = this.document.querySelector('body');

    burgerTrigger.addEventListener('click', () => {
        burgerTrigger.classList.toggle('_active');
        body.classList.toggle('_lock');
    });

    //popup
    const popup = this.document.querySelector('.popup');
    //!Change trigger in real project
    burgerTrigger.addEventListener('click', () =>{
        popup.classList.toggle('_visible');
    });
});