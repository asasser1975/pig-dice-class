// //Business Logic
// //Player1
// function Player1() {
//   this.roll = 0;
// }
//
// Player1.prototype.roll = function () {
//   this.roll = Math.floor(Math.random()*6) + 1;
// }
//
// $(document).ready(function() {
//
//   $("#player1-roll").click(function() {
//       event.preventDefault();
//       var newPlayer1 = new Player1();
//       newPlayer1.roll();
//       $("player1-score").text(result);
//     });
//
//
//
//   });

   function roll() {
    return Math.floor(Math.random()*6) + 1;
   }

  $(function() {

    $("#player1-roll").click(function() {
        event.preventDefault();
        var result = roll();
        $("#player1-score").text(result);
      });

    });
