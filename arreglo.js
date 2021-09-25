
let arre=['1','2','3','4','5'];
let cont=0;

const Arreglo =setInterval(()=>{
    console.log(arre[cont])
    cont++;
    if(cony>6){
       clearInterval(Arreglo)
  }
},1000)