/* 
Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e o segundo elemento é o maior dos parâmetros.*/ 
function maxmin(a, b, c, d, e){

    var menor = ["1", "2", "3", "4", "5"]
    
    var maior =  ["5", "4", "3", "2", "1"]
    
    Math.min(menor, maior)
    
    Math.max(menor, maior)
    
    return [menor, maior] 
}
maxmin()