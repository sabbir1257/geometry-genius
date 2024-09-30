/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step -2: addad an id in the base input field
 * step -3: use getElementById to access the input field 
 * step -4: get calue from the input field. (valus is string now)
 * step -5: convart the value toa number. use parseFoat
 * 
 *  */

function calculateTriangleArea() {
     // get triangle base value
     const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBaseText = triangleBaseInput.value;
     const base = parseFloat(triangleBaseText)
     // console.log( base);

     // get triangle height value
     const triangleHeightInput = document.getElementById('triangle-height');
     const triangleheightText = triangleHeightInput.value;
     const height = parseFloat(triangleheightText)
     // console.log(height);

     // calculate triangle area
     const area = 0.5 * base * height;
     console.log('area of the triangle is:' ,area);

     // display triangle area
     const triangleAreaSpan = document.getElementById('triangle-area');
     triangleAreaSpan.innerText = area;
}