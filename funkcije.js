/*
function imefunkcije (par1,par2) {


//telo
return //sta funkcija vraca 
}
function zbir(broj1,broj2) {
let s =broj1+ broj2            //normalno racuna
console.log(s)
return s        //vraca se ponovo;sta god da pise u funk. najbitnije je sta pise u return-u
}
zbir (3,4)
*/
//proizvod,zbir,razlika
function zbir (b1,b2) {
    let s = b1 + b2
    return s
} 
function razlika (b1,b2) {
    let s =b1 - b2
    return s
}
function proizvod (b1,b2){
    let s= b1 * b2 
    return s
}
function kolicnik (b1,b2) {
    let s= b1 % b2 
    return s
}
b1=1 
b2=2
sum =0
sum = zbir (b1,b2)
console.log(zbir(b1,b2))
console.log(razlika(b1,b2))
console.log(proizvod(b1,b2))
console.log(kolicnik(b1,b2))
 //  vraca najmanje od 3 vrednosti
 function min (a,b,c) {
     let min=a 
     if (b<min) {
         min =b
     }
     if (c<min){
         min= c
     }
  
     return min 
 }
 console.log(min(1,9,5)) 
 //napisati funkciju koja ispisuje povrsinu kruga (parametar r)
 function krug(r){
     let P= r*r * Math.PI
     console.log(P)
 } 
 // napisati funkciju koja vraca povrsinu kruga -||-
 function krug2 (r){
     let P=r*r *Math.PI
     return P
 }
 console.log(krug2(4))         //razlika izmedju dve funk. kad imaju return i kad nemaju 
 krug(4)
//napisati funkciju koja odredjuje prestupnu godinu 
// ako je return za prestupnu je true
//return ako nije prestupna onda je return false
function prestupnagodina (g) {
    let godina=1986
    if (godina % 4 ==0 && (godina % 100!=0 || godina % 400==0)) {
        return true
    }
    else {
        return false 
    }
}
console.log(prestupnagodina(1986))