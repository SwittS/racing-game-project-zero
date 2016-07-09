
$(document).ready(function() {
  console.log("sanity sanity sanity");




  $(document).keyup(function(e) { // key click for possible player
     if(e.which == 48) { // click zero
       console.log('zero zero zero');
     } else if(e.which == 49)
       console.log("one one one");

   });

});
