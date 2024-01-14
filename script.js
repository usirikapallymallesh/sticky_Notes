let color = document.querySelector("#color");
let textInInput = document.querySelector("#text");
let button = document.querySelector("button");

let rightContainer = document.querySelector(".resultContainer");

button.addEventListener("click", (e) => {
  let element = document.querySelector(".resultContainer>p");
  element.style.display = "none";
  let textValue = textInInput.value;
  let divColor = color.value;
  if (textValue === "") {
    alert("please enter the text to add !!");
    return;
  }
  createNewDiv(textValue, divColor);

  textInInput.value = "";

  removeSticky();
});

function createNewDiv(text1, color1) {
  let div = document.createElement("div");
  div.classList.add("stickyBox");
  div.innerHTML = `<p>${text1}</p>
                   <button class="btn2">X</button>
                   `;
  div.style.backgroundColor = color1;
  div.style.overflow = "hidden";
  rightContainer.appendChild(div);
  removeSticky();
}
function removeSticky() {
  let rc = document.querySelectorAll(".btn2");

  rc.forEach((single) => {
    single.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
}
