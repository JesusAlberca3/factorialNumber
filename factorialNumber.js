/**
 * 1. Crear una funcion para recibir un numero entero 'n'
 * 2. Definir el caso base donde el numero sea menor a 2 se retorna el valor de 1
 * 3. Definir el caso contrario donde se retorna el valor de 'n' * la funcion del numero - 1
 * 
 * factorialNumber(n)
 * // input: n where n E Z
 * // output: the factorial of n
 * base case
 * IF n < 2 then:
 *   RETURN 1
 * ELSE 
 *  RETURN n * factorialNumber(n-1)
 */
function factorialNumber(n){
    //base case
    if(n < 2){
        return 1;
    }
    else {
        return n *  factorialNumber(n-1);
    }
}

const n = 6;
const factorial = factorialNumber(n);
console.log(`El numero factorial de  ${n} es: ${factorial}`);
