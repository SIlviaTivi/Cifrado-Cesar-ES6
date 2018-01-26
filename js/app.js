window.addEventListener('load', function() {

let PosiFija = 33
let cipher_letters  = document.getElementById('textVal').value
let letters=cipher_letters.toUpperCase()// convirtiendo letras a mayusculas

// creando funcion
let cipher = function(cipher_var,Position){
    //descartando espacios
    // si indexOf escuentra un espacio el valor es diferente de -1 , si se cumple nos da alerta y si no, sigue
    cipher_var.indexOf(' ')!==-1 ? alert("NO se se admiten espacios"):
    cipher_var;

        //descartando numeros

        //si indexOf encuentra una numero del 0 al 9 no nos daria -1 y si nos daria un numero mayor que cero
        // si eso se cumple entra el elemento al array con push
        Arr_numbers=[]
        for (let i=0; i<10; i++){
          let num = letters.indexOf(i)// buscamos numeros 0 del  al 9
          if(num>=0){ Arr_numbers.push(num)
          }
        }
        // si se encuentra almenos un valor en el array o  numero de elementos del array mayor a 0 , quiere decir que almenos se encontro un numero y nos da alerta
         if(Arr_numbers.length>0){  alert('no se admiten números')
         }
         else{  let result = letters
         }

// transformando a codigo cesar
    Letters_change=[];
    for (let u=0; u<cipher_var.length; u++){
    let CadaLetString= result.charAt(u)// obteniendo los elementos del string
    let changeLetters= String.fromCharCode((CadaLetString.charCodeAt()-65+PosiFija)%26+65) // formula de cifrado cesar
    Letters_change.push(changeLetters); // introduciendo los elementos al array LetArr
     }

// uniendo los elementos con join
        let Join=Letters_change.join('')

// nos retorna la union de las cifras convertidas
       document.getElementById('encryption').innerHTML = 'Cifrado: '+Join;    
 }

cipher(cipher_letters,PosiFija);

});