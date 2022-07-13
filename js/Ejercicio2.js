let palabra = prompt();

for(i=0; i<palabra.length; i++){
    let palabraSecundaria ="";
    for(j=0; j<=(palabra.length-i); j++){
        palabraSecundaria+=palabra[i].toUpperCase();
    }
    palabraSecundaria+="<br>"
    document.write(palabraSecundaria)
}