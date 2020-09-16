// ispisati za brojeve od 1 do 200 tako sto ce pisati fizz,buzz,zazz,razz
let i=1
let s=''
for (i=1;i<=200;i++){
    s = ''
if (i % 3==0){
    s += 'fizz'
}
if (i%5==0){
    s +='buzz'
}
if (i%7==0){
    s +='zaz'
}
if(i%11==0){
    s += 'raz'
} 
if (s == '') {
    s = i
}
console.log(s)
}
