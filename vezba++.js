//ispisati sledecu  strukturu pomocu zvezdica za uneto N
{let N=13
let red= ''
for (let i = 0; i<N; i++){
    red +='*'
}
console.log(red)}
// c=4
let c =13
let red = ''
for (let i=0;i<c;i++){            //ako bi smo ubacili console.log u petlju ici ce * u jednom redu..itd
    red +='*'            
}
for (let i=0;i<c;i++) {
    console.log(red)
}
//napisati program koji racuna zbir parnih a proizvod neparnih brojeva od k do n 
let v=10
let f=20
let sum=0
let proizvod=1
while (v<=20){
    console.log(v)
    v++
    if (v % 2 ==0){
        console.log('paran') //ne mora
       sum +=v
    }
    else {
        console.log('neparan') //ne mora
proizvod *=v
    }

}
console.log(sum,proizvod)
