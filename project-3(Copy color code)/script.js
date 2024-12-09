// Step-1 : Create onload handler
window.onload = () => {
  main();
};

function main() {
  // Step-3 : collect all necessary reference
  const mainDiv = document.getElementById("main");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  // Step-4 : handle the click event
  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColorCode();
    mainDiv.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  // step-5: copy the HEX Code
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}

// Step-2 : random HEX Color Code Generator function
function generateHexColorCode() {
  //  #000000 , #ffffff
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
