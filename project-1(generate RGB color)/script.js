// Step-1 : Create onload handler
window.onload = () => {
  main();
};

function main() {
  // Step-3 : collect all necessary reference
  const mainDiv = document.getElementById("main");
  const btn = document.getElementById("btn");

  // Step-4 : handle the click event
  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    mainDiv.style.backgroundColor = bgColor;
  });
}

// Step-2 : random rgb color Generator function
function generateRGBColor() {
  //  rgb(0, 0, 0) rgb(255, 255, 255)
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
