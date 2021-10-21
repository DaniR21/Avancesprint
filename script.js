let cantdi , divisa1, divisa2;
let calcular = 0 ;
let resultado = 0;
let form= document.querySelector ("form");
form.addEventListener("submit", (e) =>  {
    e.preventDefault( );
}

let cantdi = document.getElementById ("cantidad") .value ;  
let divisa1 = document.getElementById("divisa1").value ;
let divisa2 = document.getElementById("divisa2").value ;

calcular= (cantdi*divisa1)*divisa2
