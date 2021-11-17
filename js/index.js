const switchMode = document.querySelector("#switchMode");

switchMode.onclick = () => {
  const theme = document.querySelector("#theme");

  if (theme.getAttribute("href") === "./styles/light.css") {
    theme.href = "./styles/dark.css";
  } else {
    theme.href = "./styles/light.css";
  }
};
