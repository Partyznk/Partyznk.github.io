import jsonData from './elements.json' assert {type:'json'}
import dropdownfilter from './filterdropdown.js'
import * as cart from './cart.js'
import createCard from './element.js';

jsonData.forEach((element, index) => createCard(element, index))

const filterdropdown = document.querySelector("#filter");
document.getElementById("dropdowncontent").style.display = 'none';
filterdropdown.addEventListener('click', (event) => {
    dropdownfilter();
});

const cartdropdown = document.querySelectorAll('[id^="addtocart"] button');
cartdropdown.forEach(function(element, index){
    document.getElementById("cartdropdown_"+ (index + 1)).style.display = 'none';
})
cartdropdown.forEach(function(element, index){
    element.addEventListener('click', (event) => {
        cart.dropdown("cartdropdown_"+ (index + 1),index);
    })
})

const cartdropdownminus = document.querySelectorAll('[id^="minus"]');
cartdropdownminus.forEach(function(element, index){
    element.addEventListener('click', (event) => {
        cart.tickerminus(index);
    })
})

const cartdropdownplus = document.querySelectorAll('*[id^="plus"]');
cartdropdownplus.forEach(function(element, index){
    element.addEventListener('click', (event) => {
        cart.tickerplus(index);
    })
})

const closecartdropdown = document.querySelectorAll('.cartdropdown');
closecartdropdown.forEach(function(element, index){
    element.addEventListener('mouseleave', (event) =>{
        setTimeout(function(){cart.closecart(index)}, 1000);
    })
});



