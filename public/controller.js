console.log('Bienvenido al controlador de funciones')

var btnLogOut = document.getElementById("btnLogOut")

var filas = document.getElementById("filas")
var columas = document.getElementById("columnas")

//Obteniendo valores de 2x2
var uno_uno = document.getElementById("uno_uno")
var uno_dos = document.getElementById("uno_dos")
var dos_uno = document.getElementById("dos_uno")
var dos_dos = document.getElementById("dos_dos")

//Obteniendo la matriz de 3x3
var tres_uno_uno = document.getElementById("tres_uno_uno")
var tes_uno_dos = document.getElementById("tes_uno_dos")
var tes_uno_tres = document.getElementById("tes_uno_tres")
var tres_dos_uno = document.getElementById("tres_dos_uno")
var tres_dos_dos = document.getElementById("tres_dos_dos")
var tres_dos_tres = document.getElementById("tres_dos_tres")
var tres_tres_uno = document.getElementById("tres_tres_uno")
var tres_tres_dos = document.getElementById("tres_tres_dos")
var tres_tres_tres = document.getElementById("tres_tres_tres")

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
    alert(`Tu Resultado es: ${res} `)
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

function resolverzz(){
    event.preventDefault()
    var objmat = {
        tres_uno_uno_1  : tres_uno_uno.value,
        tes_uno_dos_2   : tes_uno_dos.value,
        tes_uno_tres_3  : tes_uno_tres.value,
        tres_dos_uno_4  : tres_dos_uno.value,
        tres_dos_dos_5  : tres_dos_dos.value,
        tres_dos_tres_6 : tres_dos_tres.value,
        tres_tres_uno_7 : tres_tres_uno.value,
        tres_tres_dos_8 : tres_tres_dos.value,
        tres_tres_tres_9 : tres_tres_tres.value              
    }
    console.log(objmat)

    var tr_f1_c1 = objmat.tres_uno_uno_1
    var tr_f1_c2 = objmat.tes_uno_dos_2
    var tr_f1_c3 = objmat.tes_uno_tres_3
    var tr_f2_c1 = objmat.tres_dos_uno_4
    var tr_f2_c2 = objmat.tres_dos_dos_5
    var tr_f2_c3 = objmat.tres_dos_tres_6
    var tr_f3_c1 = objmat.tres_tres_uno_7
    var tr_f3_c2 = objmat.tres_tres_dos_8
    var tr_f3_c3 = objmat.tres_tres_tres_9

    let tot = det_determinante(tr_f1_c1, tr_f1_c2, tr_f1_c3, tr_f2_c1, tr_f2_c2,tr_f2_c3 , tr_f3_c1, tr_f3_c2, tr_f3_c3 ) 
     
    alert(`Tu resultado es: ${tot}`)
    /*swal({
        title: `Tu resultado es: ${tot}`,
        animation: false,
        customClass: 'animated tada'
    })*/
}

function det_determinante(q,w,e,r,t,y,u,i,o){
    
    let dat1 = parseInt(q)
    let dat2 = parseInt(w)
    let dat3 = parseInt(e)
    let dat4 = parseInt(r)
    let dat5 = parseInt(t)
    let dat6 = parseInt(y)
    let dat7 = parseInt(u)
    let dat8 = parseInt(i)
    let dat9 = parseInt(o)

    let op1 = q * t * o
    let op2 = r * i * e
    let op3 = u * w * y
    
    let op4 = r * w * o
    let op5 = q * i * y
    let op6 = u * t * e

    let res = ( op1 + op2 + op3 ) - ( op4 + op5 + op6 )

    return res
}


btnLogOut.addEventListener("click", function(){
    confirm('Deseas Salir?',  window.location.href = "index.html" )
})
