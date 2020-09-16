//prosecna vrednost
/*
let niz= [1,3,5,22]
sum = 0
for (i=0;i< niz.length;i++) {
    sum +=niz[i]
}
console.log(sum/niz.length)     

*/     //razlika izmedju ove dve petlje je u obelezavanju elemenata 
        //  tj.nacin pristupanja elemenata (linija 7 i 13)
 /*
for (let i of niz ) {               
 sum += i
}
console.log(sum/niz.length)
*/
 // ispisati zbir parnih i proizvod neparnih brojeva niza
 /*
 let niz =[3,6,7,8,9,1,33,56,78,9,68,98] 
 proizvod=1
 sum=0
 for (i=0;i< niz.length;i++) {
     if (niz[i] % 2==0 ) {      //paran
        sum += niz[i]
    }
    else {
proizvod *=niz [i]              //neparan
    }
 }
 console.log(sum,proizvod)
 */
//STRINGOVI   //konstante,ne menjaju se bas str= nesto se menja..ali hello world se ne menja 
/*
{ 
    let str='Hello world'
    console.log(str.includes('Hell'))   //ako je veliko slovo H onda je true,ako je malo false
    console.log(str) //ispisace se Hello world 
    // str [0] = 'Z' // NE MOZE ! 
    //str.replace () //nece promeniti stari string
    console.log(str)
    console.log(str.replace('H','Z'))   // promenice tj dace novu vrednost stringu.
}
*/
{//PRETVORITI STRING U NIZ 
//bez spejsa svaki karakter za sebe ukljucujuci i spejs;//ako stavimo spejs onda ce traziti spejs i razdvajati
//let niz = str.split('') 
//console.log(niz)
}
//Da li je string validan ?
/* Nije prazan 
Ima najmanje 4 karaktera,a najvise 20  */
/*
let str= 'he ll o w o r l d'
if (str == '') {
    console.log(false)
}
    else if  (str.length >=4 && str.length <=20 ) {
        console.log (true)
    }
    else {
        console.log(false)
    }
*/
/*
Provera email-a
Ima najmanje 10karaktera (ukupno)
Sadrzi rec com ili rs
Sadrzi karakter @
*/
//let email = 'maleticdarijagmail.com'
/*
if (email.length >=10 && (email.includes('com') || email.includes('rs')) && email.includes('@')) {
    console.log(true)
}
else {
    console.log(false)
}
 // iz niza mora da sadrzi ['rs','com','org','edu','co','ru']
*/
let email = 'comcomcomcomcomcomc' 
let niz = ['rs','com','org','edu','co','ru']
let validno=false
if (email.length >=10 && email.includes('@')) {     //ako nije proverava samo jedan element.

 for (i=0;i<niz.length;i++) {
     if (email.endsWith(niz[i]))        //ceo niz proverava ako je u petlji. //endswith-zavrsava se sa.
       validno=true
       }}
    
else{
    validno=false
}
console.log(validno)
