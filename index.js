var bitcoin = 19.839;
var ethereum = 1.556;

    
let mensaje = "Bienvenido a BiSwap";
    alert(mensaje); 


let entrada = prompt("Seleccione su Crypto ETH/BTC ").toUpperCase();

while(entrada != "ESC" ){
   switch (entrada) {
       case "ETH":
           let cantidad = Number(prompt("ingresa la cantidad de dolares"));
           let resultado = ethereum / cantidad;
           alert(resultado);

            break;
        case "BTC":
           let cantidad2 =  Number(prompt("ingresa la cantidad de dolares"));
           let resultado2 = bitcoin / cantidad2;
           alert(resultado2);

            break;
       default:
           alert("Lo sentimos... aun no tenemos todas las cryptos. :[")
           break;
   }
entrada = prompt(" ¿Quieres hacer otra convercion ETH/BTC? ESC/Salir").toUpperCase();
}

alert("Gracias!!!.. Vuelva pronto."); 
