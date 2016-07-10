console.log("sanity sanity sanity!");

$(document).ready(function() {

  $(document).keyup(function(e) {
// declare winner using conditionals
    if ($('.player1').hasClass('winner')){
        alert("Player 1 Wins! Press Reset to Play Again!");
      } else if($('.player2').hasClass('winner')) {
      alert("Player 2 Wins! Press Reset to Play Again!");
    }
    // player 1 button mash "1"

    if(e.which == 49) {
      $(".player1").animate({marginLeft: "+=60"});
    }
    // if player 1 reaches the end of the track
    if ($('.raceTrack1').width() <= $('.player1').offset().left){
      $('.player1').addClass("winner");
    }
  });

  // player 2 button "0" mash
  $(document).keyup(function(e) {
    if(e.which == 48) {
      $(".player2").animate({marginLeft: "+=60"});
    }
    // if player 2 reaches the end of the track
    if ($('.raceTrack2').width() <= $('.player2').offset().left){
      $('.player2').addClass("winner");

    }
  });

});
