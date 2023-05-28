/*
REGLA(key) DE ENCRIPTACION:
 "e"  => "enter"
 "i"  => "imes"
 "a"  => "ai"
 "o"  => "ober"
 "u"  => "ufat"
 Ejemplo:
 gato => gaitober 
 gaitober => gato
*/
/* 
Requisitos:
Debe funcioanr solo con letras minusculas
No se pueden usar acentos, tildes, ni caracteres especiales
Tener un campo de texto para poder escribir lo que va a ser encriptado/desencriptado 
Mostrar el resultado  de la (des)encriptacion en pantalla
*/


/* 
Una vez terminado el proyecto, desencriptar este mensaje secreto:

fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

*/


// Variables
const textArea = document.querySelector(".text-area")
const msj = document.querySelector('.msj')
const copia = document.querySelector('.copiar')
copia.style.display = 'none'


// Validar texto (que no tenga acentos, tildes ni caracteres especiales)
function validarTexto() {
    let textoEscrito = document.querySelector('.text-area').value
    let validar = textoEscrito.match(/^[a-z\s]*$/) // \s es para incluir espacios

    if (!validar || validar === 0) {
        alert('Solo son permitidas letras minusculas. No acentos, tildes, ni caracteres especiales')
        location.reload()
        return true
    }
}



// Boton de 'Encriptar'
function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        msj.value = textoEncriptado
        msj.style.backgroundImage = 'none'
        textArea.value = ""
        copia.style.display = 'block'
    }
}

function encriptar(stringEncriptar) {
    let regla = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ]
    stringEncriptar = stringEncriptar.toLowerCase()

    for (let i = 0; i < regla.length; i++) {
        if (stringEncriptar.includes(regla[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(regla[i][0], regla[i][1])
        }
    }
    return stringEncriptar
}



//  Boton de 'Desencriptar'
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    msj.value = textoEncriptado
    textArea.value = ""
}

function desencriptar(stringDesencriptar) {
    let regla = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ]
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for (let i = 0; i < regla.length; i++) {
        if (stringDesencriptar.includes(regla[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(regla[i][1], regla[i][0])
        }
    }
    return stringDesencriptar

}


//  Boton 'Copiar'
function copiar() {
    msj.select()
    navigator.clipboard.writeText(msj.value)
    msj.value = ""
}