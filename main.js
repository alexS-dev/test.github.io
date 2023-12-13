
$(document).ready(function() {
   var counter1 = 0;
   var targetNumber1 = 1.5;
   var isCounting1 = false;

   var counter2 = 0;
   var targetNumber2 = 4;
   var isCounting2 = false;

   var counter3 = 0;
   var targetNumber3 = 5;
   var isCounting3 = false;

   var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust the threshold value as needed
   };

   var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
         if (entry.isIntersecting && !isCounting1 && entry.target.id === 'counter1') {
            isCounting1 = true;
            var interval1 = setInterval(function() {
               if (counter1 >= targetNumber1) {
                  clearInterval(interval1);
               } else {
                  counter1 += 0.1;
                  $('#counter1').text(counter1.toFixed(1));
               }
            }, 100); // Change the interval duration (in milliseconds) to adjust the animation speed
         }

         if (entry.isIntersecting && !isCounting2 && entry.target.id === 'counter2') {
            isCounting2 = true;
            var interval2 = setInterval(function() {
               if (counter2 === targetNumber2) {
               clearInterval(interval2);
               } else {
               counter2++;
               $('#counter2').text(counter2);
               }
            }, 300); // Change the interval duration (in milliseconds) to adjust the animation speed
         }

         if (entry.isIntersecting && !isCounting3 && entry.target.id === 'counter3') {
            isCounting3 = true;
            var interval3 = setInterval(function() {
               if (counter3 === targetNumber3) {
               clearInterval(interval3);
               } else {
               counter3++;
               $('#counter3').text(counter3);
               }
            }, 300); // Change the interval duration (in milliseconds) to adjust the animation speed
         }
      });
   }, options);
   

   observer.observe(document.getElementById('counter1'));
   observer.observe(document.getElementById('counter2'));
   observer.observe(document.getElementById('counter3'));

   $('.accordion-button').on('click', function() {
      $('.accordion').on('show.bs.collapse', function(e) {
         $(e.target).prev('.accordion-header').find('.accordion-button').addClass('active');
         $(e.target).prev('.accordion-header').find('.accordion-button').addClass('header');
         console.log("------------show------------");
      });

      $('.accordion').on('hide.bs.collapse', function(e) {
         $(e.target).prev('.accordion-header').find('.accordion-button').removeClass('active');
         $(e.target).prev('.accordion-header').find('.accordion-button').removeClass('header');
         console.log("------------hide------------");
      });
   });
   $('.accordion-button:first').trigger('click');
});