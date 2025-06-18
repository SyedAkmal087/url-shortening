const InputUrl = document.querySelector(".shortenemail");
const shortenbtn = document.querySelector("#shortenit");
const hamburgerbtn = document.querySelector('.hamburger')
const menu = document.querySelector('.menu');



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

hamburgerbtn.addEventListener('click' , (e)=>{
    e.stopPropagation();
    console.log('I am in');
    if(menu.style.display === 'none')
    {
        menu.style.display = 'flex';
    }
    else{
        menu.style.display = 'none'
    }

})

window.addEventListener('click' , ()=>{
     menu.style.display = 'none'
})