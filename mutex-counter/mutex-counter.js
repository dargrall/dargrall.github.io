let counter = 0;
let preString = "";
let preInput, startInput, generateBtn, numberSpan;

function generate() {
    if (startInput.value != "") {
        counter = startInput.value;
        startInput.value = null;
    }
    console.log(counter);
    //console.log(preInput.value + ++counter);
    numberSpan.innerHTML = preInput.value + ++counter;

}

window.onload = function() {
    console.log("mutex-counter.js loaded...");
    
    preInput = document.getElementById('fixedString');
    startInput = document.getElementById('counterStart');
    generateBtn = document.getElementById('generate');
    numberSpan = document.getElementById('number');

    //console.log(generateBtn);
    //generateBtn.onclick((event) => {
    //    event.preventDefault();
    //    generate();
    //});
};