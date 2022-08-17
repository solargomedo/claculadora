window.addEventListener("load",()=> {//escuchamos cuando se carga el documento
   
    //creamos do constantes y guardamos los elementos que necesitemos
const display= document.querySelector(".calculadora-display");
const keypadButtons = document.getElementsByClassName("keypad-boton");

//creamos otra constante para convertir el HTMLCollection a array
const keypadButtonsArray = Array.from(keypadButtons);

//iteramos por el nuvo array de botones
keypadButtonsArray.forEach((boton)=>{

    //a cada boton le agregamos un listener
    boton.addEventListener('click', ()=>{
        calculadora(boton, display);
        function calculadora(boton, display){
            
           switch (boton.innerHTML){
            case 'C':
                borrar(display);
                break;

            case '=':
                calcular(display);

            break;

            default:
                actualizar(display, boton);

            break;
           } 
        }

        function calcular(display){
            display.innerHTML = eval(display.innerHTML)//tomar el string y resolverlo y guardarlo en el innerHTML DEL DISPLAY
        }

        function actualizar(display, boton){
            if (display.innerHTML == 0){
                display.innerHTML = '';

            }
            display.innerHTML += boton.innerHTML;
        }

        function borrar(display){
            display.innerHTML = 0;
        }
    })
})

});