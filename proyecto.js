var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var hijos = prompt("¿Tiene hijos?", "SI/NO");
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precioBase = 250;

comision = precioBase * 0.30;

recargos = 0;
recargoExtra= 0;

//Recargo por edad
recargoT1=0;
//Variables para el recargo de conyuge
var recargoC1=0;

// VARIABLE DE LA EDAD
var edad=0;
var edadConyuge=0;
var anioNacimientoConyuge=0;
anioNacimientoConyuge= prompt (" Ingrese año nacimiento conyuge");
    edadConyuge = 2020 - anioNacimientoConyuge;
    edad =  2020 - anioNacimiento;

    
    if( edad >18){

        if(edad>=18 && edad<=21){
            document.write("No se le aplican recargos")
        }
    

    else if(edad >=21 && edad <25){
        recargoT1=precioBase * 0.01;

        //Validacion de Conyugues
        if(conyuge=="SI" && edadConyuge <30){
            recargoC1= precioBase*0.01;
        }
        else if (conyuge =="SI" && edadConyuge >=30 && edadConyuge <40){
            recargoC1= precioBase * 0.02;
            }
        else if (conyuge =="SI" && edadConyuge >= 40&& edadConyuge <50){
        recargoC1= precioBase*0.03;
        }
        else if (conyuge =="SI" && edadConyuge >=50&&edadConyuge <70){
            recargoC1= precioBase*0.05;
        }
    
    }

    else if (edad >=25 && edad <30){
        recargoT1=precioBase * 0.02;
    
    if(conyuge=="SI" && edadConyuge <30){
        recargoC1= precioBase*0.01;
    }
    else if (conyuge =="SI" && edadConyuge >=30 && edadConyuge <40){
        recargoC1= precioBase * 0.02;
        }
    else if (conyuge =="SI" && edadConyuge >= 40&& edadConyuge <50){
    recargoC1= precioBase*0.03;
    }
    else if (conyuge =="SI" && edadConyuge >=50&&edadConyuge <70){
        recargoC1= precioBase*0.05;
    }
    }


    else if (edad >=30 && edad <40){
        recargoT1= precioBase*0.05;

    if(conyuge=="SI" && edadConyuge <30){
        recargoC1= precioBase*0.01;
    }
    else if (conyuge =="SI" && edadConyuge >=30 && edadConyuge <40){
        recargoC1= precioBase * 0.02;
        }
    else if (conyuge =="SI" && edadConyuge >= 40&& edadConyuge <50){
    recargoC1= precioBase*0.03;
    }
    else if (conyuge =="SI" && edadConyuge >=50&&edadConyuge <70){
        recargoC1= precioBase*0.05;
    }
}


    else if (edad >=40 && edad <50){
        recargoT1 = precioBase*0.08;

        if(conyuge=="SI" && edadConyuge <30){
            recargoC1= precioBase*0.01;
        }
        else if (conyuge =="SI" && edadConyuge >=30 && edadConyuge <40){
            recargoC1= precioBase * 0.02;
            }
        else if (conyuge =="SI" && edadConyuge >= 40&& edadConyuge <50){
        recargoC1= precioBase*0.03;
        }
        else if (conyuge =="SI" && edadConyuge >=50&&edadConyuge <70){
            recargoC1= precioBase*0.05;

    }
    }
    else if (edad >=50 && edad <65){
        recargoT1= precioBase*0.12;
        if(conyuge=="SI" && edadConyuge <30){
            recargoC1= precioBase*0.01;
        }
        else if (conyuge =="SI" && edadConyuge >=30 && edadConyuge <40){
            recargoC1= precioBase * 0.02;
            }
        else if (conyuge =="SI" && edadConyuge >= 40&& edadConyuge <50){
        recargoC1= precioBase*0.03;
        }
        else if (conyuge =="SI" && edadConyuge >=50&&edadConyuge <70){
            recargoC1= precioBase*0.05;
    }
    
}
else if (edad >=65){
    document.write("No se le puede asegurar")
}
    }
else {
    document.write("Usted es menor de edad, no sea mentiroso");
}
recargoExtra=(cantidadHijos*0.01*precioBase);
recargos=(recargoT1+recargoC1+recargoExtra);
document.write("Nombre: " +nombreCompleto+"<br>");
document.write("recargo asegurado principal: "+recargoT1+"<br>"+"Recargos por conyuge: "+recargoC1+"<br>"+"Recargo por cantidad de hijos: "+recargoExtra);
document.write("<br>Total de recargos"+recargos+"<br>");
document.write("<br>----------------------------<br>")
totalPagar = precioBase + comision + recargos;
document.write("TOTAL A PAGAR  -> "+totalPagar)