function calculatePentagonArea() {
     const perimeter = getInputValueBuyId('pentagon-perimeter');
     const apothem = getInputValueBuyId('pentagon-apothem')

     const area = 0.5 * perimeter * apothem;

     setInnerTextById('pentagon-area', area);
};

function getInputValueBuyId(inputFieldId) {
     const inputField = document.getElementById(inputFieldId);
     const inputValueText = inputField.value;
     const value = parseFloat(inputValueText);
     return value;
}

function  setInnerTextById(elementId, area){
     const element = document.getElementById(elementId);
     element.innerText = area;
}