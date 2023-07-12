alert(
    
)
const min_sprint =10;
const max_sprint =50;

let metaP1 = 200;
let metaP2 = 200;

let vuelta = 0;

 function calcularVelocidad(){
    return Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
} 
function ambosConFuerza(){
    return metaP1>0 && metaP2>0
} 

function llegadaP1(){
   return energiaGoku > 0
}

   while(ambosConFuerza()){
      round +=1;
      let correP1 = calcularVleocidad();
      let correP2 = calcularVelocidad();
      
      console.log("------ Round " + round + "-------")
  
      if(correP1 == correP2){
          
          console.log("Siga Siga");
      } else if(correP1 > correP2){
          correP2 -= correP1;
          console.log("sprint " + correP1);
          console.log("toma ventaja P1" + correP1);
          
          if(correP2 < 0){
            correP2 = 0;
          }
          console.log("recorrido que falta " + correP2);
          
      }else {
          correP1 -= correP2;
          console.log("sprint " + correP2);
          console.log("toma ventaja P2 " + correP2);
  
          if(correP1 < 0){
              correP1 = 0;
          }
          console.log("recorrido que falta " + correP1);
      }}
      console.log("---------------------")

if(llegadaP1()){
    console.log("Gano P1")

}else {
    console.log("Gano P2")
}
   





  
let correrP1 =math.ceil(math.random)