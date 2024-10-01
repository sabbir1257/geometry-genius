function calculateRectangleArea(){
     // get lenght of the rectangle
     const lenghtInput = document.getElementById('rectangle-lenght');
     const lenghtText = lenghtInput.value;
     const lenght = parseFloat(lenghtText);
     console.log(lenght);

     // get width of the rectangle
     const widthInput = document.getElementById('rectangle-width');
     const widthText = widthInput.value;
     const width  = parseFloat(widthText);
     console.log(width);
     
     // calculate rectaongle area
     const area = lenght * width;
     console.log('area of the rectangle:', area);

     // display rectangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText = area;
}