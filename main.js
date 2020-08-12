let app = document.querySelector('.wrapper');

window.addEventListener('wheel', function(e) {
   activeScreensCount = app.querySelectorAll(".screen").length
   console.log(activeScreensCount);
   if (e.deltaY > 0) app.scrollLeft += app.scrollWidth/activeScreensCount/10;
   else app.scrollLeft -= app.scrollWidth/activeScreensCount/10;
   // app.scrollLeft += e.deltaY > 0? (app.scrollWidth/activeScreensCount/10) : -(app.scrollWidth/activeScreensCount/10)
});


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
