const InputUrl = document.querySelector(".shortenemail");
const shortenbtn = document.querySelector("#shortenit");


InputUrl.addEventListener("focus", () => {
  InputUrl.style.border = "none";
  InputUrl.value = '';
});

shortenbtn.addEventListener("click", () => {
  if (InputUrl.value === "") {
    InputUrl.style.border = "2px solid red";
  } else {
    InputUrl.value = 'Thank You for Trying'
  }
});
