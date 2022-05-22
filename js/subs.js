const contador = document.querySelector('.subs');

contadorDeSubs(6350)

function contadorDeSubs(s) {
    let x = 0;
	let uwu = setInterval(function(){
        x += 30;
        contador.innerHTML = x + "K";
        if (x >= s) {
            s = x - s;
            x = x - s;
            contador.innerHTML = x + "K";
            clearInterval(uwu);
            resaltar();
        }
    },1);
}

function resaltar () {
    contador.className = "subs-f fs-1";
    setTimeout(()=>{contador.className = "subs fs-4"},600)
}