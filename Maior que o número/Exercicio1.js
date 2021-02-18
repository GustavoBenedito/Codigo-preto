
array = []
numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5
function maiorQueNum(numeros, num){
    for(i=0;i<numeros.length;i++){
        if(numeros[i] > num){
            array.push(numeros[i]);
        }
    }
    //console.log(array)
    return array
}

maiorQueNum(numeros,num)