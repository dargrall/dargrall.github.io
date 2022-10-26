console.log("mutex-counter.js loaded...");
let counter = 0;
function generate() {
    console.log(++counter);
}
let generateBtn = document.getElementById('generate');
generateBtn.onclick(generate);