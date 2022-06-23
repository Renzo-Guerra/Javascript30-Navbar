document.addEventListener("DOMContentLoaded", ()=>{
  const openNavBtn = document.getElementById("openNavButton");
  const closeNavBtn = document.getElementById("closeNavButton");
  
  /* 
  * Ascedemos al elemento previo (El nav) para agregarle la clase 'active', para que muestre el nav
  */
  openNavBtn.addEventListener("click", ()=>{
    openNavBtn.previousElementSibling.classList.add("active");
  });

  /*
  * Ascedemos al elemento "abuelo" (El nav) para quitarle la clase 'active', para que deje de mostrar el nav
  */
  closeNavBtn.addEventListener("click", ()=>{
    closeNavBtn.parentElement.parentElement.classList.remove("active");
  });
});