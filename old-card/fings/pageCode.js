const showButton = document.getElementById("showButton");
const stadium = document.getElementById("stadium");
const body = document.querySelector("body");
const bodyClasses = ["bg-purple-400", "h-full", "w-full"];

const enterPit = () => {
  const gates = document.createElement("div");
  const daPit = document.createElement("script");
  daPit.src = "/../dist/main.js";

  gates.classList.add("m-auto");
  stadium.style.display = "none";
  showButton.style.display = "none";
  bodyClasses.forEach((bodyClass) => {
    body.classList.add(bodyClass);
  });
  daPit.classList.add("m-auto");
  body.appendChild(gates);
  gates.appendChild(daPit);
};

showButton.addEventListener("click", (e) => enterPit());
