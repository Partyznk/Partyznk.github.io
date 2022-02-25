var postedElement = '<div class="number"><span></span></div><div class="container"></div><h4></h4><p class="ingredients"></p><div class="addtocart" id="addtocart_1"><button type="button" class="button"><span class="button__icon"><ion-icon name="cart-outline"></ion-icon></span><span class="button__text">Add to cart</span></button><div class="cartdropdown" id="cartdropdown"><span id="minus">–</span><p id="index">0</p><span id="plus">+</span></div></div><p class="price"></p>';
export default function createCard(element, index){
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