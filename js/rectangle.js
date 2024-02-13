function rectangle(){
    //for width
    const inputWidth = document.getElementById('input-width');
    const inputWidthValue = inputWidth.value;
    const width = parseFloat(inputWidthValue);
    //for height
    const inputHeight = document.getElementById('input-heigh');
    const inputValueTwo = inputHeight.value;
    const height = parseFloat(inputValueTwo);
    //for mathematics
    const result = width * height;
    //for put value inside span
    const showResult = document.getElementById('putting');
    showResult.innerText = result;
}