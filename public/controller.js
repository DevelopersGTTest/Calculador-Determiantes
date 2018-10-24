var filas = document.getElementById("filas")
var columas = document.getElementById("columnas")

//Obteniendo valores de 2x2
var uno_uno = document.getElementById("uno_uno")
var uno_dos = document.getElementById("uno_dos")
var dos_uno = document.getElementById("dos_uno")
var dos_dos = document.getElementById("dos_dos")


function calcularMatriz(){
    event.preventDefault()
    var f_c = {
        numero_filas: filas.value,
        numero_columas: columas.value
    }
    //Desestructurando f_c
    var f_destruct = f_c.numero_filas
    var c_destruct = f_c.numero_columas
    
   //Validando que no sea mayor a 5
    if( validarIntegridadColumnas(c_destruct));
    if( validarIntegridadFilas(f_destruct));
    
    //Igualando valores para mostrar un modal especial
    if(c_destruct == f_destruct){
        var resp = resolverValores(c_destruct, f_destruct)
        console.log(resp);
        if(resp == 4){
            console.log('seleccionaste una matriz de 2x2')
            $('#modal2x2').modal('show')
            
        }
        if(resp == 6 ){
            console.log('Seleccionaste una matriz de 3x3')
            $('#modal3x3').modal('show') 
        }
        if(resp == 8){
            console.log('Seleccionaste una matriz de 4x4')
            $('#modal4x4').modal('show')
        }
    }
}

function mostrarPlantilla(){
    $('#modalBase').modal('show') //Success
}

function validarIntegridadFilas(f_destruct){
    if(f_destruct >= 5){
        alert('Proceso es invalido -- Ingrese algo valido');
    }else{
        alert('es menor a 5 filas')
    }
}

function validarIntegridadColumnas(c_destruct){
    if(c_destruct >=5){
        alert('Procedimiento es invalido');
    }else{
        alert('es menor a 5 columnas')
    }
}

function resolverValores(x, y){
    var dat1 = parseInt(x), dat2 = parseInt(y);
    var resuelto = dat1 + dat2; 
    return resuelto;
}

function resolvertz(){
    event.preventDefault()
    var mat2x2 = {
      uno_a_uno: uno_uno.value,
      uno_a_dos: uno_dos.value,
      dos_a_uno: dos_uno.value,
      dos_a_dos: dos_dos.value 
    }
    console.log(mat2x2);

    var f1_c1 = mat2x2.uno_a_uno
    var f1_c2 = mat2x2.uno_a_dos
    var f2_c1 = mat2x2.dos_a_uno
    var f2_c2 = mat2x2.dos_a_dos
    
    let res = det_2x2(f1_c1, f1_c2, f2_c1, f2_c2)
    console.log(res)
}

function det_2x2(a, b, c, d){
    
    let dat1 = parseInt(a) //Fila 1, columna 1
    let dat2 = parseInt(b) //Fila 1, columna 2
    let dat3 = parseInt(c) //Fila 2, columna 1
    let dat4 = parseInt(d) //Fila 2, columna 2

    let op = dat1 * dat4 - dat3 * dat2
    return op
}
