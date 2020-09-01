//na osnovu tri unete stranicce,odrediti da li je trougao validan 
//zbir svake dve stranice je veci od trece 
let a = 5
let b = 3
let c = 5 
if (a+b>c && a+c>b && b+c>a) {
    
    console.log('validan')
}
else {
    console.log ('Nije validan')
}