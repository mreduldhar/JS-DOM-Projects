// Step-1 : Create onload handler
window.onload = () => {
  main();
};

// Globals vars
let div = null;

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
    if (div !== null) {
      div.remove();
      div = null;
    }

    if (isValidHex(output.value)) {
      navigator.clipboard.writeText(output.value);
      // Step 6 - activate toast message
      generateToastMessage(`${output.value} coppied`);
    } else {
      alert("Invalid Color Code");
    }
  });

  // step-10:  implement change handler on input field
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      mainDiv.style.backgroundColor = color;
    }
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

/**
 * js doc
 * @param {string} color
 */
// step-9:  create isHexValid function
function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// step-11: prevent copying hex code if it is not valid

/**
 *
 */
