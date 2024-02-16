function getValueFromId(input){
    const getValue= document.getElementById(input).value
    returnValue = parseFloat(getValue)
    return returnValue;
}

function triangleBtn(){
    const base= getValueFromId('triangle-base');
    const height= getValueFromId('triangle-height');
    
    const Area= 0.5* base* height
    console.log(Area)
}
function rectangleBtn(){
    const width= getValueFromId('rectangle-width');
    const length= getValueFromId('rectangle-length');
    
    const Area= width* length
    console.log(Area)
}
function parallelogramBtn(){
    const base= getValueFromId('parallelogram-base');
    const height= getValueFromId('parallelogram-height');
    
    const Area= base* height
    console.log(Area)
}
function rhombusBtn(){
    const d1= getValueFromId('rhombus-d1');
    const d2= getValueFromId('rhombus-d2');
    
    const Area= 0.5* d1* d2
    console.log(Area)
}
function pentagonBtn(){
    const p= getValueFromId('pentagon-p');
    const b= getValueFromId('pentagon-b');
    
    const Area= 0.5* p* b
    console.log(Area)
}
function ellipseBtn(){
    const a= getValueFromId('ellipse-a');
    const b= getValueFromId('ellipse-b');
    
    const Area= Math.PI* a* b
    console.log(Area)
}
