import Logo from "./logo.svg";

let root;

function init() {
  root = document.getElementById("root");
  root.innerHTML = `
    <img src="${Logo}" alt="build icon"></img>
    <h1> learning web tooling today <h1> 
    <button id="button">About</button>
    <div id="route"></div>
    `;
}

init();

var button = document.querySelector("#root");

button.addEventListener("click", lazyLoad);

function lazyLoad() {
  import("./App").then(({ default: App }) => {
    const about = App({ name: "Pragya" });
    document.querySelector("#route").innerHTML = about
  });
}
