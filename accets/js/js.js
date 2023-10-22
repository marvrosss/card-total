precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var cantidad = document.querySelector(".cantidad");
var subir = document.querySelector("#subir");
var bajar = document.querySelector("#bajar");
var precioinicial = document.querySelector(".precio-inicial");
var valortotal = document.querySelector(".valor-total");

subir.onclick = function() {
    cantidad.innerHTML++;
    valortotal.innerHTML = cantidad.innerHTML * precioinicial.innerHTML;
}

bajar.onclick = function() {
    cantidad.innerHTML--;
    valortotal.innerHTML = cantidad.innerHTML * precioinicial.innerHTML;
}