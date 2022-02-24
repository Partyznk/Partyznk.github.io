function tickerminus(index){
    let x = document.getElementById('float').innerHTML;
    x = parseInt(x, 10);
    let y = document.getElementById('index_'+(index+1)).innerHTML;
    y = parseInt(y, 10);
    if ((x != 0) && (y != 0)){
        document.getElementById('float').innerHTML = x-1;
        document.getElementById('index_'+(index + 1)).innerHTML = y-1;
    }
    else if ((x == 0) && (y != 0)) {
    }
    else if ((x != 0) && (y == 0)){ 
    }
    else {
    }
}

function tickerplus(index){
    var x = document.getElementById('float').innerHTML;
    x = parseInt(x, 10);
    document.getElementById('float').innerHTML = x+1;
    x = document.getElementById('index_'+(index+1)).innerHTML;
    x = parseInt(x, 10);
    document.getElementById('index_'+(index + 1)).innerHTML = x+1;
    document.getElementById("cartdropdown_"+ (index + 1)).style.display = 'flex';
}

function dropdown(idelement, index){
    let x = document.getElementById(idelement).style.display;
    if (x =='none'){
        document.getElementById(idelement).style.display = 'flex';
    }
    else {
        document.getElementById(idelement).style.display = 'none';
    }
    let y = x;
    x = document.getElementById('index_'+(index+1)).innerHTML;
    x = parseInt(x, 10);
    if ((x == 0) && (y == 'none')){
        document.getElementById('index_'+(index+1)).innerHTML = x+1;
        x = document.getElementById('float').innerHTML;
        x = parseInt(x, 10);
        document.getElementById('float').innerHTML = x+1;
    }
}

function closecart(index){
    document.getElementById("cartdropdown_"+(index+1)).style.display = 'none';
}

export {tickerminus, tickerplus, dropdown, closecart};