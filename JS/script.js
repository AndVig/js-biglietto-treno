let length= prompt("Quanti km vuoi percorrere?");
length=parseInt(length);
console.log("length: ",length);
let age=prompt("Quanti anni hai?");
age=parseInt(age);
console.log("age: ",age);
//var priceOverKm = 0.21;
var fullPrice = length * 0.21 ;
var line1= "Il prezzo del biglietto è: ";
var value=" euro";
console.log(fullPrice);


if(age <= 18){
    document.getElementById('cost').innerHTML= line1 + ((fullPrice / 100) * 80) + value;
}
else if(age>=65){
    document.getElementById('cost').innerHTML= line1+ ((fullPrice/100)*60)+ value;
}
else{
    document.getElementById('cost').innerHTML= line1+ fullPrice+ value;

}