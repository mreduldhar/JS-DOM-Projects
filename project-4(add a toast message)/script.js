// Globals vars
let div = null;

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

  // step 5 - handle the copy button click event
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);

    if (div !== null) {
      div.remove();
      div = null;
    }

    // Step 6 - activate toast message
    generateToastMessage(`${output.value} coppied`);
  });
}

// Step 7 - create a dynamic toast message
function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  console.log(div);
  div.className = "toast-message toast-message-slide-in";

  // step 8 - clear toast message
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

// Step-2 : random HEX Color Code Generator function
function generateHexColorCode() {
  //  #000000 , #ffffff
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
