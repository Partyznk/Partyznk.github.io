import jsonData from './elements.json' assert {type:'json'}
import dropdownfilter from './filterdropdown.js'
import * as cart from './cart.js'

var postedElement = '<div class="number"><span></span></div><div class="container"></div><h4></h4><p class="ingredients"></p><div class="addtocart" id="addtocart_1"><button type="button" class="button"><span class="button__icon"><ion-icon name="cart-outline"></ion-icon></span><span class="button__text">Add to cart</span></button><div class="cartdropdown" id="cartdropdown"><span id="minus">–</span><p id="index">0</p><span id="plus">+</span></div></div><p class="price"></p>';
jsonData.forEach((element, index) => createCard(element, index))

function createCard(element, index){
    let maindiv = document.createElement("div")
    maindiv.classList.add(element.section)
    maindiv.innerHTML = postedElement
    let idsection = "section " + element.section 
    document.getElementById(idsection).appendChild(maindiv)
    let randomvar = maindiv.getElementsByClassName("number")
    let number = randomvar[0].getElementsByTagName("span")
    number[0].id = "number_"+(index+1)
    number[0].innerHTML = index+1
    randomvar = maindiv.getElementsByClassName("container")
    randomvar[0].style.backgroundImage = "url('./style/media/"+ element.url + "')"
    randomvar = maindiv.getElementsByTagName("h4")
    randomvar[0].innerHTML = element.title
    randomvar = maindiv.getElementsByClassName("ingredients")
    randomvar[0].innerHTML = element.ingredients
    randomvar = maindiv.getElementsByClassName("price")
    randomvar[0].innerHTML = "€"+element.price
    randomvar = maindiv.getElementsByClassName("addtocart")
    randomvar[0].id = "addtocart_"+(index+1)
    number = randomvar[0].getElementsByClassName("cartdropdown")
    number[0].id = "cartdropdown_"+(index+1)
    randomvar = maindiv.querySelector("#minus")
    randomvar.id = "minus_"+(index+1)
    randomvar = maindiv.querySelector("#plus")
    randomvar.id = "plus_"+(index+1)
    randomvar = maindiv.querySelector("#index")
    randomvar.id = "index_"+(index+1)
}

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



