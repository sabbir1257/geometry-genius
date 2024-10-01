function calculateParallelogramArea() {
     // //base input fild
    /*  const baseInput = document.getElementById('parallelogram-base');
     const baseText = baseInput.value;
     const base = parseFloat(baseText)
     console.log('base input :', base); */

     // // height input fild 
    /*  const heightInput = document.getElementById('parallelogram-height');
     const heightText = heightInput.value;
     const height = parseFloat(heightText)
     console.log(height); */

     // // calculate area
    /*  const area = base * height;
     console.log('area of the parallelogram:', area); */
     
     // // display Parallelogram area
    /*  const display = document.getElementById('parallelogram-area');
     display.innerText = area; */

     const base = getParallelogramBase();
     console.log(base);
}

function getParallelogramBase(){
     const baseInput = document.getElementById('parallelogram-base');
     const baseText = baseInput.value;
     const base = parseFloat(baseText)
     return(base)
}