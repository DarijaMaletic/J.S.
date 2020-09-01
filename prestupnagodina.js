//da li je prestupna godina
// 1. godina je deljiva sa 4
// godina nije deljiva sa 100 ili jeste deljiva sa 400
let godina = 1984 

if (godina % 4 ==0 && (godina % 100!=0 || godina % 400==0)) {
    console.log ('godina je prestupna')
}
else {
    console.log ('godina nije prestupna')
}   