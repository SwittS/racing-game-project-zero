$(document).ready(function() {
  // player 1 button "1" mash
  var $player1 = $(".player1");
  var $player2 = $(".player2");
  var $raceTrack1 = $(".raceTrack1");
  var $raceTrack2 = $(".raceTrack2");

  $(document).keyup(function move(e) {
    if (e.which == 49) {
      $player1.css("left",("+=40"));
      // if player 1 reaches the end of the track
      if ($raceTrack1.width() <= $player1.offset().left + $player1.outerWidth()) {
        stopMvmt();
      }
    }
  });

  // player 2 button "0" mash
  $(document).keyup(function(e) {
    if (e.which == 48) {
      $player2.css("left",("+=40"));
      // if player 2 reaches the end of the track
      if ($raceTrack2.width() <= $player2.offset().left + $player2.outerWidth()) {
        stopMvmt();
      }
    }
  });

  // halts the movement after image meets the end of the window!
  function stopMvmt() {
    $player1.clearQueue();
    $player1.clearQueue();
    $(document).off("keyup");
  }

});

// if ($('.player1').offset().left > 1000){
//   console.log("p1 win");
// } else if($('.player2').offset().left > 1000) {
//   console.log("p2 win");
// }
