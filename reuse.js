function parallelogram(){
    const base = reuseForInput('input-pa-base'); 
    //console.log('Base value', base);

    const height = reuseForInput('input-pa-heigh'); 
   // console.log('Base value', height);

    //for calculation
    const result = base * height;
    //console.log(result);


     setResult('for-paralalogram',result);
}



function reuseForInput(inputFieldId){
    const inputBase = document.getElementById(inputFieldId);
    const inputValueText = inputBase.value ;
    const inputValue  = parseFloat(inputValueText);
    return inputValue;
}

function setResult(spanId,result){
    const ShowOutput = document.getElementById(spanId);
    ShowOutput.innerText = result;
}

const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);
