$(document).ready(function() {

  var MOVE_AMOUNT = "+=40";

  var $player1 = $(".player1");
  var $player2 = $(".player2");
  var $raceTrack1 = $(".raceTrack1");
  var $raceTrack2 = $(".raceTrack2");

  p1move();
  p2move();

  // player 1 button "1" mash
  function p1move(){
    $(document).keyup(function(e) {
      if ((e.which == 49) && ($raceTrack1.width() > $player1.offset().left + $player1.outerWidth())){
        $player1.css("left", MOVE_AMOUNT);
        // if player 1 reaches the end of the track
        if ($raceTrack1.width() <= $player1.offset().left + $player1.outerWidth()) {
          $("h2").text("You saved Matt Damon. Good job! We get more Jason Bourne movies!");
          $("#reset").removeClass("hidden");
          stopMvmt();
        }
      }
    });
  }
  // player 2 button "0" mash
  function p2move(){
    $(document).keyup(function(e) {
      if ((e.which == 48) && ($raceTrack2.width() > $player2.offset().left + $player2.outerWidth())) {
        $player2.css("left", MOVE_AMOUNT);
        // if player 2 reaches the end of the track
        if ($raceTrack2.width() <= $player2.offset().left + $player2.outerWidth()) {
          $("h2").text("Bad job. You let Jimmy Kimmel capture Matt Damon! No chance for Good Will Hunting 2 now!");
          $("#reset").removeClass("hidden");
          stopMvmt();
        }
      }
    });
  }
// this function will prevent further key press after a winner is declared
  function stopMvmt() {
    $player1.clearQueue();
    $player1.stop();
    $player2.clearQueue();
    $player1.stop();
    $(document).off("keyup");
  }
  // reset the game by moving both players back to original position, clears the text, and hides the button
  $('#reset').on("click", function() {
    stopMvmt();
    p1move();
    p2move();
    $("h2").text("");
    $("#reset").addClass("hidden");
    $player1.css({
      "left": "0"
    });
    $player2.css({
      "left": "0"
    });
  });
});
