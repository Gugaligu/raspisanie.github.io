let tel = document.getElementById("tel");
let html = ``;
let copy = document.getElementById("copy");
let del = document.getElementById("del");
let send = document.getElementById("send");
let numberpara = document.getElementById("numberpara");
let day = document.getElementById("daypara")
let lock = document.getElementById("lock");
let col_button = document.getElementById("col")
var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);



let color_back = ``
color_back = localStorage.getItem(`light`)
window.onload = lod;
console.log(localStorage.getItem(`light`))
col_button.innerHTML = color_back
function lod() {
    if (col_button.innerHTML.includes("sun")) {
        console.log("солнышко")
        col_button.innerHTML = `<img src="sun.png" style="height: 3vh;">`
        document.querySelector(`.color_nastr`).style.cssText = `background: rgb(199, 199, 199);border: #fff1d7;`
        document.getElementById("col").style.cssText=`border: 1px solid rgba(75, 75, 75, 0.3);
    box-shadow: 50px 50px 30px rgba(0, 0, 0, 0.24);`
    }
    if (col_button.innerHTML.includes("moon")) {
        console.log("луна")
        col_button.innerHTML = `<img src="moon.png" style="height: 3vh;">`
        document.querySelector(`.color_nastr`).style.cssText = `background-color: #313131;border: #fff1d7;`
        document.getElementById("col").style.cssText=`border: 1px solid rgb(200, 200, 200);
    box-shadow: 50px 50px 30px rgba(0, 0, 0, 0.24);background-color: #ffffff52;`
    }
    if (localStorage.getItem(`light`) === null) {
        localStorage.setItem(`light`, `<img src="sun.png" style="height: 3vh;">`)
    }
}
col_button.onclick = function () {
    let col_button = document.getElementById("col")
    if (col_button.innerHTML.includes("sun")) {
        localStorage.setItem(`light`, `<img src="moon.png" style="height: 3vh;">`)
        col_button.innerHTML = `<img src="moon.png" style="height: 3vh;">`
        document.getElementById("col").style.cssText=`border: 1px solid rgb(200, 200, 200);box-shadow: 50px 50px 30px rgba(0, 0, 0, 0.24);background-color: #ffffff52;`
        document.querySelector(`.color_nastr`).style.cssText = `background: #313131;border: #fff1d7;`
    } else {
        localStorage.setItem(`light`, `<img src="sun.png" style="height: 3vh;">`)
        col_button.innerHTML = `<img src="sun.png" style="height: 3vh;">`
        document.querySelector(`.color_nastr`).style.cssText = `background-color: rgb(199, 199, 199);border: #fff1d7;`
        document.getElementById("col").style.cssText=`border: 1px solid rgba(75, 75, 75, 0.3);
    box-shadow: 50px 50px 30px rgba(0, 0, 0, 0.24);`
    }
    console.log(localStorage.getItem("light"))
}


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







