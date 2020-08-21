let app = document.querySelector('.wrapper');
const styleTag = document.querySelector("style")

//SCREEN6
let typesOfRecieps = document.querySelector(".screen6_left_side_buttons")
typesOfRecieps.addEventListener("click",(event)=>{
   console.log(event)
   event.target.classList.toggle("variant_active")
});

//SCREEN 8
[...document.querySelectorAll(".plus_block")].map((item)=>{
   item.addEventListener("click",function selectElem(event){
      console.log(this);
      console.dir(event);
      this.parentElement.lastElementChild.lastElementChild.classList.toggle("opacity1")
      this.lastElementChild.classList.toggle("closed")
   })
})


//SCREEN MENU
document.querySelector(".screen_menu__logo")

let pagePosition = 0;
function scroolOnTranslate(event){
   console.log("working" ,event);
   setTimeout(()=> {
      window.addEventListener('wheel', scroolOnTranslate)
   },200)
   window.removeEventListener("wheel",scroolOnTranslate)
   if (event.deltaY>0||event.deltaX>0){
      pagePosition>=900?{}:pagePosition += 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }else{
      pagePosition<=0?{}:pagePosition -= 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }
}
function mobileScroolOnTranslate(event){
   console.log("working mobile" ,event);
   if (event.deltaX>20){
      pagePosition>=900?{}:pagePosition += 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }else if(event.deltaX<-20) {
      pagePosition<=0?{}:pagePosition -= 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }
}

let touchStartInfo = null;
let touchEndInfo = null;
window.addEventListener('wheel', scroolOnTranslate);


window.addEventListener("touchstart",(event)=> {
   touchStartInfo = event.changedTouches[0];
   touchEndInfo;
   console.log(event);
})
window.addEventListener("touchend",(event)=> {
   console.log(event);
   touchEndInfo = event.changedTouches[0];
   // console.log([touchStartInfo, touchEndInfo])
   fakeDeltaX = touchStartInfo.clientX - touchEndInfo.clientX
   let fakeEvent = {deltaX:fakeDeltaX}
   mobileScroolOnTranslate(fakeEvent);
   touchStartInfo = null;
   touchEndInfo = null;
})



/*function handleGoFromMenuTo(event){
   menuScreen.classList.remove("opacity1");
   menuScreen.style.zIndex = -1000;
   window.addEventListener("wheel",customScroll)
   let whereGo = document.querySelector(event.target.getAttribute("go-from-menu"));
   console.log(whereGo);
   whereGo.scrollIntoView({block: "center", behavior: "smooth"});
   closeMenu()
}
function handleOpenMenu(event){
   if(!event.target.classList.contains("menu")) return
   /!*going to screen of clicked menu*!/
   let screenTarget = event.target.getAttribute("located-on-scr");
   let screenNum = screenTarget.slice(4)
   console.log(screenTarget, screenNum);
   document.querySelector(screenTarget).scrollIntoView({block: "center", behavior: "smooth"});
   let fullMenu = document.querySelector(".screen_menu");
   console.log(fullMenu);
   fullMenu.style.gridColumn = `${screenNum}/${+screenNum+1}`
   fullMenu.style.zIndex = 10000;
   app.style.overflowX = "hidden"
   setTimeout(()=>fullMenu.classList.add("opacity1"),200)
   setTimeout(()=>app.style.overflowX = "hidden",900)

   window.removeEventListener("wheel",customScroll)
}
function closeMenu(){
   menuScreen.classList.remove("oppac1");
   menuScreen.style.zIndex = -1000;
   app.style.overflowX = "initial"

   window.addEventListener("wheel",customScroll)
}*/
// function handleGoToNextScreen(event) {
//    if (!event.target.getAttribute("next-scr")) return;
//    let whereGo = document.querySelector(event.target.getAttribute("next-scr"));
//    whereGo.scrollIntoView(/*{block: "center", behavior: "smooth"}*/);
//    console.log(whereGo);
// }
/*document.addEventListener("click",handleGoToNextScreen)
document.addEventListener("click",handleOpenMenu)
document.addEventListener("click",(event)=>{
   if (!event.target.classList.contains("logo")) return;
   document.querySelector("#scr1").scrollIntoView({block: "center", behavior: "smooth"})
})
menuScreenCloseButton.addEventListener("click",closeMenu)
menuButtonsBlock.addEventListener("click",handleGoFromMenuTo)*/

/*let customScrollState = false;
function customScroll(event){
   if (customScrollState) return
   customScrollState = true
   let width = app.offsetWidth;

   let animationTime = 500;
   let animationStepsCount = 100;
   let animationStepTime = animationTime/animationStepsCount;

   let stepWidth = width/animationStepsCount
   console.log(event.deltaY);
   let animationEnd = width % animationStepsCount
   animationEnd = 25
   console.log(animationEnd);
   if(event.deltaY>0){
      let scrollWidthMade = 0;
      let idT = setInterval(()=>{
         app.scrollLeft += stepWidth;
         scrollWidthMade++;
         console.log(stepWidth);
         if(scrollWidthMade==animationStepsCount){
            customScrollState = false
            clearInterval(idT)
            let animEndChecker = 0;
            let animEndId = setInterval(()=>{
               app.scrollLeft++;
               animEndChecker++;
               if(animEndChecker==animationEnd)clearInterval(animEndId)
            },10)
            // justifyScreen()
         }
      },animationStepTime)

   }
   if(event.deltaY<0){
      let scrollWidthMade = 0;
      let idT = setInterval(()=>{
         app.scrollLeft -= stepWidth;
         scrollWidthMade++;
         console.log(stepWidth);
         if(scrollWidthMade==animationStepsCount){
            customScrollState = false
            clearInterval(idT)
            // justifyScreen()
         }
      },animationStepTime)
   }
   console.log(stepWidth*animationStepsCount);
   /!*let counter = 0;
   activeScreensCount = app.querySelectorAll(".screen").length
   console.log(activeScreensCount);
   let step = app.scrollWidth/activeScreensCount/10
   if (event.deltaY > 0){
      let timerId = setInterval(()=>{
         app.scrollLeft += app.scrollWidth/activeScreensCount/10/10 ;
         counter++
         counter==10?clearTimeout(timerId):{};
      },100/10)
   }
   else{
      let timerId = setInterval(()=>{
         app.scrollLeft -= app.scrollWidth/activeScreensCount/10/10 ;
         counter++
         counter==10?clearTimeout(timerId):{};
      },100/10)
   }*!/
}*/
// let scrollId = window.addEventListener('wheel', customScroll);

/*
function sideScroll(element,direction,speed,distance,step){
   scrollAmount = 0;
   var slideTimer = setInterval(function(){
      if(direction == 'left'){
         element.scrollLeft -= step;
      } else {
         element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
         window.clearInterval(slideTimer);
      }
   }, speed);
}
*/

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
