console.log("sanity sanity sanity!");

$(document).ready(function() {

  // player 1 button mash "1"
  $(document).keyup(function(e) {
    if(e.which == 49) {
      $(".player1").animate({marginLeft: "+=60"});
      console.log("test");
    }

    if ($('.raceTrack1').width() <= $('.player1').offset().left){
      console.log("yes it works!");
    }
  });

  // player 2 button "0" mash
  $(document).keyup(function(e) {
    if(e.which == 48) {
      $(".player2").animate({marginLeft: "+=60"});
      console.log("test2");
    }
  });




});
