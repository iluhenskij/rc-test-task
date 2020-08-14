/*let app = document.querySelector('.wrapper');
let scrolMade = 0
function scrollHandler(e) {
   console.log("scroll started");
   activeScreensCount = app.querySelectorAll(".screen").length
   console.log(activeScreensCount);
   window.removeEventListener("wheel",scrollHandler)
   // if (e.deltaY > 0) app.scrollLeft += app.scrollWidth/activeScreensCount/10;
   // else app.scrollLeft -= app.scrollWidth/activeScreensCount/10;
   let counterOut = 0;
   let ms = 300;
   let timeOut = 20;
   let steps = ms/timeOut;
   let move = app.scrollWidth/activeScreensCount/10/steps
   if (e.deltaY > 0) {
      setTimeout(function stepChange(){
         app.scrollLeft += move;
         counterOut++;
         if (counterOut <= steps){setTimeout(stepChange,timeOut)}
      },steps)
   }else if (e.deltaY < 0){
      setTimeout(function stepChange(){
         app.scrollLeft -= move;
         counterOut++;
         if (counterOut <= steps){setTimeout(stepChange,timeOut)}
      },steps)

   }
   window.addEventListener('wheel', scrollHandler);
   console.log("scroll ended");

}

window.addEventListener('wheel', scrollHandler);*/
let app = document.querySelector('.wrapper');
const menuButtonsBlock = document.querySelector(".screen_menu__items")
const menuScreen = document.querySelector(".screen_menu")
const menuScreenCloseButton = document.querySelector(".screen_menu__close_botton")
const logoHeader = document.querySelector(".logo")

function customScroll(event){
   activeScreensCount = app.querySelectorAll(".screen").length
   console.log(activeScreensCount);
   if (event.deltaY > 0) app.scrollLeft += app.scrollWidth/activeScreensCount/10;
   else app.scrollLeft -= app.scrollWidth/activeScreensCount/10;
   // app.scrollLeft += e.deltaY > 0? (app.scrollWidth/activeScreensCount/10) : -(app.scrollWidth/activeScreensCount/10)
}
function handleGoToNextScreen(event) {
   if (!event.target.getAttribute("next-scr")) return;
   let whereGo = document.querySelector(event.target.getAttribute("next-scr"));
   whereGo.scrollIntoView({block: "center", behavior: "smooth"});
   console.log(whereGo);
}
function handleGoFromMenuTo(event){
   menuScreen.classList.remove("oppac1");
   menuScreen.style.zIndex = -1000;
   window.addEventListener("wheel",customScroll)
   let whereGo = document.querySelector(event.target.getAttribute("go-from-menu"));
   console.log(whereGo);
   whereGo.scrollIntoView({block: "center", behavior: "smooth"});
   closeMenu()
}
function handleOpenMenu(event){
   if(!event.target.classList.contains("menu")) return
   /*going to screen of clicked menu*/
   let screenTarget = event.target.getAttribute("located-on-scr");
   let screenNum = screenTarget.slice(4)
   console.log(screenTarget, screenNum);
   document.querySelector(screenTarget).scrollIntoView({block: "center", behavior: "smooth"});
   let fullMenu = document.querySelector(".screen_menu");
   console.log(fullMenu);
   fullMenu.style.gridColumn = `${screenNum}/${+screenNum+1}`
   fullMenu.style.zIndex = 1000;
   app.style.overflowX = "hidden"
   setTimeout(()=>fullMenu.classList.add("oppac1"),200)
   setTimeout(()=>app.style.overflowX = "hidden",900)

   window.removeEventListener("wheel",customScroll)
}
function closeMenu(){
   menuScreen.classList.remove("oppac1");
   menuScreen.style.zIndex = -1000;
   app.style.overflowX = "initial"

   window.addEventListener("wheel",customScroll)
}
window.addEventListener('wheel', customScroll);

let typesOfRecieps = document.querySelector(".screen6_left_side_buttons")
typesOfRecieps.addEventListener("click",(event)=>{
   console.log(event)
   event.target.classList.toggle("variant_active")
})
document.addEventListener("click",handleGoToNextScreen)
document.addEventListener("click",handleOpenMenu)
document.addEventListener("click",(event)=>{
   if (!event.target.classList.contains("logo")) return;
   document.querySelector("#scr1").scrollIntoView({block: "center", behavior: "smooth"})
})
menuScreenCloseButton.addEventListener("click",closeMenu)
menuButtonsBlock.addEventListener("click",handleGoFromMenuTo)