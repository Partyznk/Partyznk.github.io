import jsonData from './elements.json' assert {type:'json'}
import dropdownfilter from './filterdropdown.js'
import * as cart from './cart.js'

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

console.log(jsonData[0]);
var postedElement = '<div><div class="number"><span></span></div><div class="container"></div><h4></h4><p class="ingredients"></p><div class="addtocart" id="addtocart_1"><button type="button" class="button"><span class="button__icon"><ion-icon name="cart-outline"></ion-icon></span><span class="button__text">Add to cart</span></button><div class="cartdropdown" id="cartdropdown_1"><span id="minus_1">–</span><p id="index_1">0</p><span id="plus_1">+</span></div></div><p class="price"></p></div>';

postedElement.getElementsByClassName("number")
