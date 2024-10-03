 function calculateEllipseArea(){
     const majorRadius = getInputValueBuyId('ellipse-major-readius');
     const minorRadius = getInputValueBuyId('ellipse-minor-readius');
     const area = 3.14 * majorRadius * minorRadius;
     setInnerTextById('ellipse-area', area);
};