'use strict';
document.querySelector('#print-agreement').addEventListener('click',()=>window.print());
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
