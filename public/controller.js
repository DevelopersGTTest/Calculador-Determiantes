var filas = document.getElementById("filas")
var columas = document.getElementById("columnas")

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


