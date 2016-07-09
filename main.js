console.log("sanity sanity sanity!");


$(document).ready(function() {
  $(document).keyup(function(e) {
    if(e.which == 49) {
      $(".player1").css({marginLeft: "+=2%"});
     }
   });
  $(document).keyup(function(e) {
    if(e.which == 48) {
      $(".player2").css({marginLeft: "+=2%"});
    }
  });







});
