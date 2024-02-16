function triangleBtn(){
    const getValue= document.getElementById('triangle-base').value
    const base= parseFloat(getValue);
    
    const getValue2= document.getElementById('triangle-height').value
    const height= parseFloat(getValue2);
    
    const Area= 0.5* base* height
    console.log(Area)
}
function rectangleBtn(){
    const getValue= document.getElementById('rectangle-width').value
    const width= parseFloat(getValue);
    
    const getValue2= document.getElementById('rectangle-length').value
    const length= parseFloat(getValue2);
    
    const Area= width* length
    console.log(Area)
}
function parallelogramBtn(){
    const getValue= document.getElementById('rectangle-base').value
    const base= parseFloat(getValue);
    
    const getValue2= document.getElementById('rectangle-height').value
    const height= parseFloat(getValue2);
    
    const Area= base* height
    console.log(Area)
}
function rhombusBtn(){
    const getValue= document.getElementById('rhombus-d1').value
    const d1= parseFloat(getValue);
    
    const getValue2= document.getElementById('rhombus-d2').value
    const d2= parseFloat(getValue2);
    
    const Area= 0.5* d1* d2
    console.log(Area)
}
function pentagonBtn(){
    const getValue= document.getElementById('pentagon-p').value
    const p= parseFloat(getValue);
    
    const getValue2= document.getElementById('pentagon-b').value
    const b= parseFloat(getValue2);
    
    const Area= 0.5* p* b
    console.log(Area)
}
function ellipseBtn(){
    const getValue= document.getElementById('ellipse-a').value
    const a= parseFloat(getValue);
    
    const getValue2= document.getElementById('ellipse-b').value
    const b= parseFloat(getValue2);
    
    const Area= 3.141592653589793238462643383279502884197* a* b
    console.log(Area)
}