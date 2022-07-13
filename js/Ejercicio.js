// let palabra = "Hola Mundo";

// for(i=0; i<palabra.length; i++){
//     let palabraSecundaria ="";
//     for(j=0; j<=i; j++){
//         palabraSecundaria+=palabra[i].toUpperCase();
//     }
//     palabraSecundaria+="<br>"
//     document.write(palabraSecundaria)
// }

for(i=1; i<10; i++){
    let aux=""
    document.write("Vuelta i:"+i+"<br>")
    for(j=1; j<=i; j++){
        aux+=j;
        document.write("vuelta J:"+j+"<br>")
    }
    document.write("<br><br>")
    

}