//Business Logic

// set up true/false

var player1Turn = true;
var player2Turn = false;

//Player1
function Player1() {
  this.roll = 0;
  this.runningTotal = 0;
  this.totalScore = 0;
}

Player1.prototype.Roll = function () {
  this.roll = Math.floor(Math.random()*6) + 1;
  if (this.roll === 1) {
    this.runningTotal = 0;
    player1Turn = false;
    player2Turn = true;
  } else {
    this.runningTotal += this.roll;
  }
}

Player1.prototype.Hold = function () {
  this.totalScore += this.runningTotal;
  if (this.totalScore >= 100) {
    alert("Player 1 Wins!");
    location.reload();
  } else {
  this.runningTotal = 0;
  player1Turn = false;
  player2Turn = true;
  }
}

//Player2
function Player2() {
  this.roll = 0;
  this.runningTotal = 0;
  this.totalScore = 0;
}

Player2.prototype.Roll = function () {
  this.roll = Math.floor(Math.random()*6) + 1;
  if (this.roll === 1) {
    this.runningTotal = 0;
    player1Turn = true;
    player2Turn = false;
  } else {
    this.runningTotal += this.roll;
  }
}

Player2.prototype.Hold = function () {
  this.totalScore += this.runningTotal;
  if (this.totalScore >= 100) {
    alert("Player 2 Wins!");
    location.reload();
  } else {
  this.runningTotal = 0;
  player1Turn = true;
  player2Turn = false;
  }
}
//UI Logic

$(document).ready(function() {
  var newPlayer1 = new Player1();
  //$("#player2-roll").hide();
  //$("#player2-hold").hide();
  $("#player1-roll").click(function() {
      event.preventDefault();
      if (player1Turn === false) {
        //$("#player1-roll").hide();
        //$("#player1-hold").hide();
        //$("#player2-roll").show();
        //$("#player2-hold").show();
        alert("Player 2 Turn");
      } else {
        newPlayer1.Roll();
        $("#player1-current-roll").text(newPlayer1.roll);
        $("#player1-running-total").text(newPlayer1.runningTotal);
        $("#player1-score").text(newPlayer1.totalScore);
      }

    });

    $("#player1-hold").click(function() {
        event.preventDefault();
        if (player1Turn === false){
          alert("Player 2 Turn, you cheater");
        } else {
          newPlayer1.Hold();
          $("#player1-current-roll").text("");
          $("#player1-running-total").text("");
          $("#player1-score").text(newPlayer1.totalScore);
        }
      });

  var newPlayer2 = new Player2();
  $("#player2-roll").click(function() {
      event.preventDefault();
      if (player2Turn === false) {
        alert("Player 1 Turn");
      } else {
        newPlayer2.Roll();
        $("#player2-current-roll").text(newPlayer2.roll);
        $("#player2-running-total").text(newPlayer2.runningTotal);
        $("#player2-score").text(newPlayer2.totalScore);
      }

    });

    $("#player2-hold").click(function() {
        event.preventDefault();
        if (player2Turn === false){
          alert("Player 1 Turn, you cheater");
        } else {
          newPlayer2.Hold();
          $("#player2-current-roll").text("");
          $("#player2-running-total").text("");
          $("#player2-score").text(newPlayer2.totalScore);
        }
      });

  });
