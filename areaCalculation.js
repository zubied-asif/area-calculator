function calculateTriangleArea(){
    const baseField = document.getElementById('tri-base');
    const basevalue = parseFloat(baseField.value);
    
    const heightField = document.getElementById('tri-height');
    const heightValue = parseFloat(heightField.value);

    const  area = 0.5 * basevalue * heightValue;
   
    
    const Total = document.getElementById('tri-total');
    Total.innerText = area;
}

function calculateRectArea(){
    const widthFiled = document.getElementById('rect-width');
    const widthValue = parseFloat(widthFiled.value);

    const lengthField = document.getElementById('rect-length');
    const lengthValue = parseFloat(lengthField.value);

    const area = widthValue * lengthValue;
    const Total = document.getElementById('rect-total')
    Total.innerText = area;

}
function calculateParaArea(){
    const baseFiled = document.getElementById('para-base');
    const baseValue = parseFloat(baseFiled.value);

    const heightField = document.getElementById('para-height');
    const heightValue = parseFloat(heightField.value);

    const area = baseValue * heightValue;
    const Total = document.getElementById('parallel-total')
    Total.innerText = area;

}

// short function 
function getInputValue(id){
    const inputField = document.getElementById(id);
    const value = parseFloat(inputField.value);
    return value;
} 
function setInnerText(id, area){
    const element =document.getElementById(id)
    element.innerText = area;
}

// lets try
function calculateEllipseArea(){
   const area = getInputValue('elli-area')
 const base = getInputValue('elli-base')
 const areaTotal = (3.14 * area * base).toFixed(1);

 
 setInnerText('elli-total',areaTotal)
}

