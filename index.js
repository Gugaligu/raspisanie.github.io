let tel = document.getElementById("tel");
let html = ``;
let copy = document.getElementById("copy");
let del = document.getElementById("del");
let send = document.getElementById("send");
let numberpara = document.getElementById("numberpara");
let day = document.getElementById("daypara")
let lock = document.getElementById("lock");


var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);





lock.onclick = function () {
    let namepara = document.getElementById("namepara").value;
    let numberpara = document.getElementById("numberpara").value;
    let daypara = document.getElementById("daypara").value;
    let nedel = document.getElementById("numbernedel").value;
    console.log(numberpara)
    document.getElementById("namepara").value = ``;
    // if (numberpara==1){document.getElementById("numberpara").value = 2;}
    // if (numberpara==2){document.getElementById("numberpara").value = 3;}
    // if (numberpara==3){document.getElementById("numberpara").value = 4;}
    // if (numberpara==4){document.getElementById("numberpara").value = 5;}
    // if (numberpara==5){document.getElementById("numberpara").value = 1;}
    document.getElementById("numbernedel").value = '';
    nedel = nedel.split(",").join("+");
    nedel = nedel.split(" ").join("");
    tel.innerHTML = tel.innerHTML + `<br>[${namepara},${numberpara},${daypara},${nedel}]`
    document.getElementById("numberpara").style.backgroundColor = "#ff00002c";
    document.getElementById("daypara").style.backgroundColor = "#ff00002c"
    console.log(namepara);
    console.log(numberpara);
    console.log(daypara);
    console.log(nedel);
}
numberpara.onclick = function () {
    document.getElementById("numberpara").style.backgroundColor = "rgba(255, 255, 255, 0.034)";
}
day.onclick = function () {
    document.getElementById("daypara").style.backgroundColor = "rgba(255, 255, 255, 0.034)";
}





copy.onclick = function () {
    navigator.clipboard.writeText(tel.innerText);
    console.log(tel.innerText);
}
del.onclick = function () {
    tel.innerHTML = ``;
    console.log("удалил");
}







