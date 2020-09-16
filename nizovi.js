//zbir svih brojeva u NIZU
//{let niz = [3,1,5,6,12,3,7]
sum=0
//for (let i=0;i<niz.length;i++){
 //   console.log(niz[i])   //nepotrebno ako se racuna ukupna suma
                          //bez sume,redjaju se br posebno u svakom redu ispisani kao u nizu
   // sum +=niz[i]


console.log(sum)
//treba da se doda element u niz
//let niz = [3,1,5]
//niz[niz.length]=2 //prvi nacin
//niz.push(2) //drugi nacin,push dodaje na kraju uvek!
//niz.pop() //skida sa kraja niza-uklonice ga 
// niz.length= niz.length-1 // smanjuje se niz za jedan br (1.nacin)

//Naci najmanji element niza 
/*
let niz = [5,2,13,7,-3,12,-4,55,3,1]
min=niz[0]
for (i=0;i<niz.length;i++){
if (niz[i] < min ) {
    min= niz[i]
}
    
}
console.log (min)
*/
/*
//Naci najveci element niza
{
    let niz= [5,2,13,7,-3,12,-4,55,3,1]
max=niz[0]
for (i=0;i<niz.length;i++){
    if (niz[i]>max) {
max=niz[i]
    }
}
console.log(max)
}
*/
//Prebaciti iz jednog niza u drugi 
/*
let x = [1,2,5,3]
let y=[]
for (let i=0;i<x.length;i++){
    y.push(x[i])
}
console.log(y)
*/
//Filtrirati (ubaciti u drugi niz) el niza koji su deljivi sa 3
let niz = [1,44,53,23,5,123,555,438,9,13,15,17,18]
let deljivsa3= []
/*
for (let i=0;i<niz.length;i++) {    //for (let el of niz) console.log(el)-pisace 1,44,53..umesto 0,1,2,3
    if (niz[i] % 3==0) 
    deljivsa3.push(niz[i])
}
console.log(deljivsa3) 
*/
//drugi nacin i BOLJI NACIN ZA NIZ
for (let el of niz){           
    if ( el % 3==0) 
    deljivsa3.push(el)
}
console.log(deljivsa3) 
