//domaci piramida 
 // ako mi i=0 onda mora da ima +1 ili -1,ako pocinje! (prazan prostor
 //ako je i=1 onda bi bilo samo i ili h-i! LINIJA 7
let h=4 
let red=''
for ( i=0;i<h;i++){

    red=' '.repeat(h-i-1)+'*'.repeat(i+1) + ' '+ '*'.repeat(i+1)    //strajk -prazan prostor u ovom slucaju.
    console.log(red)
}