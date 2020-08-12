let app = document.querySelector('.wrapper');

window.addEventListener('wheel', function(e) {
   activeScreensCount = app.querySelectorAll(".screen").length
   console.log(activeScreensCount);

   // if (e.deltaY > 0) app.scrollLeft += app.scrollWidth/activeScreensCount/10;
   // else app.scrollLeft -= app.scrollWidth/activeScreensCount/10;
   let counterOut = 0;
   let ms = 300;
   let timeOut = 10;
   let steps = ms/timeOut;
   if (e.deltaY > 0) {
      setTimeout(function stepChange(){
         app.scrollLeft += app.scrollWidth/activeScreensCount/10/steps;
         console.log(counterOut++);
         if (counterOut < steps){setTimeout(stepChange,timeOut)}
      },steps)
   }else if (e.deltaY < 0){
      setTimeout(function stepChange(){
         app.scrollLeft -= app.scrollWidth/activeScreensCount/10/steps;
         console.log(counterOut++);
         if (counterOut < steps){setTimeout(stepChange,timeOut)}
      },steps)
   }
});
