function calculateParallelogramArea (){
     const base = getInputValueBuyId('parallelogram-base');
     // console.log('base value:', base);

     const height = getInputValueBuyId('parallelogram-height');
     // console.log('height value:', height);
     
     const area = base * height;
     console.log('area of the Parallelogra:',area);

     setInnerTextById('parallelogram-area', area)
}

function getInputValueBuyId(inputFieldId){
     const inputField = document.getElementById(inputFieldId);
     const inputText = inputField.value;
     const inputValue = parseFloat(inputText);
     // console.log(inputValue);
     return inputValue;     
}

function setInnerTextById(elementId, area){
     const element = document.getElementById(elementId);
     element.innerText = area;
}