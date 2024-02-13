function triangle(){
    const inputBase = document.getElementById('input-base');
    const inputValue = inputBase.value;
    const inputFloat = parseFloat(inputValue);
   //for input height
   const inputHeight = document.getElementById('input-height');
   const inputValueHt = inputHeight.value;
   const inputFloatTwo = parseFloat(inputValueHt);
   
   // for mathematics
   const resultTriangle = 0.5 * inputFloat * inputFloatTwo;
   //console.log(resultTriangle);
   // for Showing output
   const outputTriangle = document.getElementById('output');
   const p = document.createElement('p');
   p.innerText = resultTriangle;
   outputTriangle.appendChild(p);
}