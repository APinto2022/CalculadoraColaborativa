function dividir(num1, num2){
    if(num2 != 0){
        return num1/num2
    }
    else{
        console.log("el segundo numero debe ser distinto de cero.")
    }
}

module.exports = dividir;