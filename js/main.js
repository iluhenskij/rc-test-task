let screen = document.querySelectorAll(".screen")
let dscreen = document.querySelector(".styleDscreen")
let scrollCounter = 0;

console.log(dscreen.innerHTML);


window.addEventListener("wheel",(event)=>{
   // console.log(this)
   if(event.deltaY<0)scrollCounter = scrollCounter + 20;
   if(event.deltaY>0)scrollCounter = scrollCounter - 20;


   if (scrollCounter>0) scrollCounter = 0;
   console.log(event.deltaY)
   dscreen.innerHTML = `aside{transform:translate(${scrollCounter}%,0px)}`
})
