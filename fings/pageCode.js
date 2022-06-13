const showButton = document.getElementById("showButton");
const body = document.getElementsByTagName("body")[0];

const enterPit = () => {
  const daPit = document.createElement("script");
  daPit.src = "/../dist/main.js";

  body.appendChild(daPit);
  showButton.style.display = "none";
};

showButton.addEventListener("click", (e) => enterPit());
