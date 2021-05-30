(function () {
  const container=document.querySelectorAll(".theme-controls input");
  for(const input of container){
    if (input.checked){
      document.body.classList.add(input.value);
    }
    input.addEventListener("click",(e)=>{
      document.body.classList.remove("theme-light","theme-dark");
      document.body.classList.add(e.target.value);
    })
  }
})()
