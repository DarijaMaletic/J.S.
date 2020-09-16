
let osoba1 = {
    ime: 'pera',
    broj: '364367482365',
    //niz : [1,2,3]
    godine:68
}
/*
console.log(obj.ime)
console.log(obj.broj)
console.log(obj.niz[2]) 
*/
let osoba2 = {
    ime: 'zika',
    broj: '36436745',
    godine:43
}
let osoba3 = {
    ime: 'ana',
    broj: '482365',
    godine:19
}

                      let osobe =[osoba1,osoba2,osoba3]
console.log(osobe[1].ime) //da bi se dobilo ime osobe-zika
for (let i =0;i<osobe.length;i++) {
 console.log (osobe[i].ime)        //da bi se dobila samo imena iz niza
}
for (let osoba of osobe) {
    console.log (osoba.ime)
}
 //prosecna vrednost godina 
 sum=0
 for (let i =0;i<osobe.length;i++) {
     sum +=osobe[i].godine
    
 }
 console.log(sum/osobe.length)
 //Napisati program koji racuna ukupnu cenu recepta 
 let s1 = {
     ime: 'paprika' ,
     kolicina :0.4 ,
     cena :120
 }
 let s2 ={
     ime :'jaje' ,
     kolicina :3 ,
     cena: 15.3 
 }
 let recept ={
     ime : 'paprika sa jajima' ,
     sastojci : [s1,s2]
 } 
 sum=0
  for (i=0;i<recept.sastojci.length;i++) {
   let trenutniSastojak = recept.sastojci[i] 
   sum += trenutniSastojak.cena*trenutniSastojak.kolicina
  }
  console.log(sum)