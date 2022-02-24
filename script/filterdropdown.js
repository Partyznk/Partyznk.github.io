export default function dropdownfilter(){
    let x = document.getElementById("dropdowncontent").style.display;
    console.log(x);
    if (x == 'none') {
        document.getElementById("dropdowncontent").style.display = 'block';
    }
    else {
        document.getElementById("dropdowncontent").style.display = 'none';
    }
}

