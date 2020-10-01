const img = document.getElementById('semaforoIMG');

const estado = document.getElementById('estado');
let colorIndex =0 , intervalId;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[ event.target.id ]();
}
const nextIndex = ()=>{
    if(colorIndex < 2){
        colorIndex++

    }else{
        colorIndex = 0 ;
    }
}  
    
const changeColor = ()=>{
    const colors =['red','orange','green'];

    const color =colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = ()=>{
    clearInterval(intervalId);
}
const turnOn =  {
    'red':      () => img.src   =   'img/red.png',
    'orange':   () => img.src   =   'img/orange.png',   
    'green':    () => img.src    =  'img/green.png',
    'automatic': ()=> intervalId = setInterval(changeColor, 1000)   


}

estado.addEventListener('click', trafficLight);