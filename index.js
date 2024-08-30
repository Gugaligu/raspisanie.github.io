let tel = document.getElementById("tel");
let html = ``;
let copy=document.getElementById("copy");
let del=document.getElementById("del");
let send=document.getElementById("send");

let lock = document.getElementById("lock");
lock.onclick = function () {
    let namepara = document.getElementById("namepara").value;
    let numberpara = document.getElementById("numberpara").value;
    let daypara = document.getElementById("daypara").value;
    let nedel = document.getElementById("numbernedel").value;
    document.getElementById("namepara").value=``;
    document.getElementById("numberpara").value = '';
    document.getElementById("daypara").value = '';
    document.getElementById("numbernedel").value = '';
    nedel= nedel.split(",").join("+");
    nedel= nedel.split(" ").join("");
    tel.innerHTML=tel.innerHTML+`<br>[${namepara},${numberpara},${daypara},${nedel}]`
    console.log(namepara);
    console.log(numberpara);
    console.log(daypara);
    console.log(nedel);
}

copy.onclick=function(){
    navigator.clipboard.writeText(tel.innerText);
    console.log(tel.innerText);
}
del.onclick=function(){
    tel.innerHTML=``;
    console.log("удалил");
}







