// for (let i=0;i<10;i++){
 //   console.log(i)
//  }



// ispisati brojeve deljive sa 5 od n do m 
//let n=13
//let m=80
//for (n,m;n<=80;n++ ){
   /// if (n % 5 ==0){
   //     console.log(n)
   // }
//}
// ako je broj deljiv sa 3,napisati "Perin broj"
// ako je deljiv sa 7 "Zikin broj"
//ako je deljiv sa 11 "Anin broj"
//let n=1 
//for (n;n<=100;n++) {
   // if (n % 3 ==0) {
     //   console.log('Perin broj')
    //}
    //else if (n % 7 ==0) {
       // console.log('Zikin broj')
    
    //}
    //else if (n % 11 ==0){
     //   console.log ('Anin broj')
   // }
   //  console.log(n)
 //   }
//}
//FIZZBUZZ
//za brojeve od 1 do 100
//ako je deljiv sa 3 ispisati fizz
//ako je deljiv sa 5 ispisati buzz
//ako je deljiv sa oba ispisati fizzbuzz
//ako nije deljiv ni sa cim ispisati sam broj

// Dodatak 
//1. Ako je deljiv sa 7 dodati Zazz 
//2. 3,5,7 FizzBuzzZazz
//3. 3,7 FizzZazz
//4. 5,7 BuzzZazz

for (let i=0;i<106;i++){
    if (i % 3==0 && i % 5 ==0 && i % 7 ==0 ){
        console.log ('fizzbuzzzazz') 
    } 
    else if (i % 3==0 && i % 5 ==0 ){
        console.log ('fizzbuzz') 
    } 

    else if (i % 3 ==0 && i % 7==0){
        console.log('fizzzazz')
    }
    else if (i % 5 ==0 && i % 7==0){
        console.log('buzzzazz')
    }
    else if (i % 3 ==0) {
        console.log('fizz')
    }
    else if (i % 5 ==0) {
        console.log('buzz')
    }
    else if (i % 7 ==0) {
        console.log('zazz')
    }
    else {
        console.log(i)
    }

}
