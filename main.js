let app = document.querySelector('.wrapper');

window.addEventListener('wheel', function(e) {
   activeScreensCount = app.querySelectorAll(".screen").length
   console.log(activeScreensCount);
   if (e.deltaY > 0) app.scrollLeft += app.scrollWidth/activeScreensCount/10;
   else app.scrollLeft -= app.scrollWidth/activeScreensCount/10;
   // app.scrollLeft += e.deltaY > 0? (app.scrollWidth/activeScreensCount/10) : -(app.scrollWidth/activeScreensCount/10)
});
