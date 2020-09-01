//za uneti dan u nedelji,ispisati da li je vikend ili radni dan 
let dan=1 //1,2,3,4,5,6,7

if (dan==1 || dan==2 || dan==3 || dan==4 || dan==5 ) {
    console.log('radni dan')
}
// (dan >=1 && dan <=5 )

if (dan==6 || dan==7 ){
    console.log('vikend')
}
//u zavisnosti od  datuma meseca u godini,ispisati koliko on ima dana 
 //1......12 
let mesec=2
let godina= 2020
if (godina % 4 ==0 && (godina % 100!=0 || godina % 400==0)) {
    console.log ('godina je prestupna')
}
else {
    console.log ('godina nije prestupna')
}   

switch (mesec) {
    case 1: 
    console.log (31)
    break
    case 2: 
     if (godina % 4 ==0 && (godina % 100!=0 || godina % 400==0) ) {
        console.log(29)
    }
    else {
        console.log (28)
    }   
    break
    case 3: 
    console.log (31)
    break
    case 4: 
    console.log (30)
    break
    case 5: 
    console.log (31)
    break
    case 6: 
    console.log (30)
    break
    case 7: 
    console.log (31)
    break
    case 8: 
    console.log (31)
    break
    case 9: 
    console.log (30)
    break
    case 10: 
    console.log (31)
    break
    case 11: 
    console.log (30)
    break
    case 12: 
    console.log (31)
    break
    default: 
    console.log('greska')
}
    

