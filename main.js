let app = document.querySelector('.wrapper');
const styleTag = document.querySelector("style")
//GO TO PAGE FUNCTION
function goToPage(pageNum){
   pageNum = pageNum*100-100;
   pagePosition = pageNum;
   console.log(pageNum);
   styleTag.innerHTML = `.screen{transform: translate(-${pageNum}%, 0%)}`
   checkSpecialPage()
}

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
      this.parentElement.children[1].lastElementChild.classList.toggle("opacity1")
      this.lastElementChild.classList.toggle("closed")
   })
})


// MENU HEADER
const logo = document.querySelector(".header__logo")
const menuButton = document.querySelector(".header")
const whiteLogo = document.querySelector(".white_logo_block")

logo.addEventListener("click",()=>{goToPage(1)})


const menuBotton = document.querySelector(".menu_button")
function menuOpen(event){
   menuBotton.removeEventListener("click",menuOpen)
   window.removeEventListener('wheel', scrollOnTranslate)
   window.removeEventListener('wheel', mobileScrollOnTranslate)
   console.log("opening...");
   menuBlock.style.zIndex = 1300
   setTimeout(()=>{
      menuBlock.classList.add("opacity1")
   },50)
   fadeIt(logo)
   fadeIt(pageName)
   menuBotton.classList.add("open")
   menuBotton.classList.add("white")
   setTimeout(()=> {
      logo.classList.add("fadeZindex");
      document.addEventListener('click',menuCloseWithButton)
   },500)
   
}
function menuClose(){
   menuBlock.classList.remove("opacity1")
   setTimeout(()=>{
      menuBlock.style.zIndex = -1300
   },500)
   window.addEventListener('wheel', scrollOnTranslate)
   window.addEventListener('wheel', mobileScrollOnTranslate)
}
menuBotton.addEventListener("click",menuOpen)

function menuCloseWithButton(){
   document.removeEventListener('click',menuCloseWithButton)
   menuBlock.classList.remove("opacity1")
   setTimeout(()=>{
      menuBlock.style.zIndex = -1300
   },500)
   menuBotton.classList.remove("open")
   if (pagePosition!==7){menuBotton.classList.remove("white")}
   checkSpecialPage()
   menuBotton.addEventListener("click",menuOpen)
   window.addEventListener('wheel', scrollOnTranslate)
   window.addEventListener('wheel', mobileScrollOnTranslate)
}

//MENU MAIN
const menuBlock = document.querySelector(".screen_menu")
menuBlock.addEventListener("click",(event)=>{
   if (!event.target.hasAttribute("go-from-menu"))return;
   menuClose()
   goToPage(event.target.getAttribute("go-from-menu"));
})

//MENU LEFT DISCRIPTION OF PAGE
const pageName = document.querySelector(".page_left_disription__text")

//MENU FOOTER
const footer = document.querySelector(".footer")
const footerSites = document.querySelector(".footer__social_sites")

const buttonNextScreen = document.querySelector(".footer__next_scr")
buttonNextScreen.addEventListener("click",()=>{
   let fakeEvent = {deltaX:100,deltaY:100}
   scrollOnTranslate(fakeEvent)
})


//SPECIAL RUELS FOR MENU
let specialRules = [
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 0")//SCREEN 1
      changeMenuStateFade([true,true,true,true])
      fadeIt(pageName)
   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 1")//SCREEN 2
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 2")//SCREEN 3
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "О редисе"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 3")//SCREEN 4
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "полезные свойства"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 4")//SCREEN 5
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "стоимость"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 5")//SCREEN 6
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "рецепты"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("white")
      console.log("im first spec func 6")//SCREEN 7
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "все блюда"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 7")//SCREEN 8
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "окрошка на кефире"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 8")//SCREEN 9
      changeMenuStateAppear([true,true,true,true,])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "окрошка на кефире"
         appearIt(pageName)

      },500)

   },
   function(){
      changeHeaderColor("black")
      console.log("im first spec func 9")//SCREEN 10
      changeMenuStateFade([false,false,true,false])
      changeMenuStateAppear([true,true,false,true])
      fadeIt(pageName)
      setTimeout(()=>{
         pageName.innerText = "старт продаж"
         appearIt(pageName)

      },500)

   },
]



//MENU CHANGING
function changeMenuStateFade(arr){
   if (arr[0]) {
      logo.classList.add("fade");
      logo.classList.add("fadeZindex")
   }
   if (arr[1]) {
      menuButton.classList.add("fade");
      menuButton.classList.add("fadeZindex")
   }
   if (arr[2]) {
      footer.classList.add("fade");
      footer.classList.add("fadeZindex")
   }
   if (arr[3]) {
      footerSites.classList.add("fade");
      footerSites.classList.add("fadeZindex")
   }
}
function changeMenuStateAppear(arr){
   if (arr[0]) {
      logo.classList.remove("fadeZindex");
      setTimeout(() => {
         logo.classList.remove("fade")
      }, 100)
   }
   if (arr[1]) {
      menuButton.classList.remove("fadeZindex");
      setTimeout(() => {
         menuButton.classList.remove("fade")
      }, 100)
   }
   if (arr[2]) {
      footer.classList.remove("fadeZindex");
      setTimeout(() => {
         footer.classList.remove("fade")
      }, 100)
   }
   if (arr[3]) {
      footerSites.classList.remove("fadeZindex");
      setTimeout(() => {
         footerSites.classList.remove("fade")
      }, 100)
   }
}
function changeHeaderColor(color){
   if (color=="white"){
      whiteLogo.classList.add("active")
      menuBotton.classList.add("white")

   }
   if (color=="black") {
      whiteLogo.classList.remove("active")
      menuBotton.classList.remove("white")
   }
}

//SCROLL
function checkSpecialPage(pageNum){
   let pagePos = pagePosition/100;
   // console.log(pagePos)
   specialRules[pagePos]()
}

let touchStartInfo = null;
let touchEndInfo = null;
let pagePosition = 0;

function scrollOnTranslate(event){
   console.log("working" ,event);
   window.removeEventListener("wheel",scrollOnTranslate)
   setTimeout(()=> {
      window.addEventListener('wheel', scrollOnTranslate)
   },600)
   if (event.deltaY>30||event.deltaX>30){
      pagePosition>=900?{}:pagePosition += 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }
   else if(event.deltaY>-30||event.deltaX>-30) {
      pagePosition<=0?{}:pagePosition -= 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }
   checkSpecialPage()
}
window.addEventListener('wheel', scrollOnTranslate);

//SCROLL MOBILE
function mobileScrollOnTranslate(event){
   console.log("working mobile" ,event);
   window.removeEventListener("wheel",mobileScrollOnTranslate)
   setTimeout(()=> {
      window.addEventListener('wheel', mobileScrollOnTranslate)
   },650)

   if (event.deltaX>200){
      pagePosition>=900?{}:pagePosition += 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }
   else if(event.deltaX< -200) {
      pagePosition<=0?{}:pagePosition -= 100;
      styleTag.innerHTML = `.screen{transform: translate(-${pagePosition}%, 0%)}`
   }
   checkSpecialPage()

}
window.addEventListener("touchstart",(event)=> {
   touchStartInfo = event.changedTouches[0];
   touchEndInfo;
   // console.log(event);

})
window.addEventListener("touchend",(event)=> {
   // console.log(event);
   touchEndInfo = event.changedTouches[0];
   // console.log([touchStartInfo, touchEndInfo])
   fakeDeltaX = touchStartInfo.clientX - touchEndInfo.clientX
   let fakeEvent = {deltaX:fakeDeltaX}
   mobileScrollOnTranslate(fakeEvent);
   touchStartInfo = null;
   touchEndInfo = null;
})

//global functions
function fadeIt(elem){
   elem.classList.add("fade")
}
function appearIt(elem){
   elem.classList.remove("fade")
}

checkSpecialPage()