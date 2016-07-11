$(document).ready(function() {
  var $player1 = $(".player1");
  var $player2 = $(".player2");
  var $raceTrack1 = $(".raceTrack1");
  var $raceTrack2 = $(".raceTrack2");

  // player 1 button "1" mash
  $(document).keyup(function move(e) {
    if (e.which == 49) {
      $player1.css("left",("+=40"));
      // if player 1 reaches the end of the track
      if ($raceTrack1.width() <= $player1.offset().left + $player1.outerWidth()) {
        $("h2").append("You saved Matt Damon. Good job! We get more Jason Bourne movies!");
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
        $("h2").append("Bad job. You let Jimmy Kimmel capture Matt Damon! No chance for Good Will Hunting 2 now!");
        stopMvmt();
      }
    }
  });

$('.btn-primary').on("click", function(){
  $player1.css("left",("0"));
  $player2.css("left",("0"));
});

  // halts the movement after image meets the end of the window!
  function stopMvmt() {
    $player1.clearQueue();
    $player1.clearQueue();
    $(document).off("keyup");
  }

});
