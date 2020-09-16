//ispisati strukturu pomocu zvezdica za uneto N i M
{let N=8 //brojj zvezdica
let M=3 // broj redova
let red =''
 for (i=0;i<N;i++){
     red += '*'
 }
 for (i=0;i<M;i++){
     console.log(red)
 }
}
// Ispisati strukturu pomocu zvezdica za uneto N
{let b=8 //broj zvezdica
let c=8 // red
let red =''
for (i=0;i<b;i++){
    red += '*'
}
console.log(red)

let srednjired= '*'+' ' .repeat(c-2)+ '*'

for (i=0;i<c-2;i++){
    console.log(srednjired)
    
}
console.log(red)
} 
//mario piramida (leva strana)
{let f=4 
let red =''
 for (i=0;i<f;i++){
     red += '*'          //svaka zvezdica ide pravilnim redom od 1 do 5 u poseban red (*(novi red)**..
     console.log(red)
 } 
}
// mario piramida sa druge strane (desna strana)
let h=4 
let red=''
for ( i=0;i<h;i++){
    red=' '.repeat(h-i-1)+'*'.repeat(i+1)  // ako mi i=0 onda mora da ima +1 ili -1,ako pocinje! (prazan prostor..)
                                            //ako je i=1 onda bi bilo samo i ili h-i!
    console.log(red)
}

 