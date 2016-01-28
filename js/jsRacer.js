// From EDA


//Update player position function:


$('document').ready(function() {    //code will only run after the page has fully loaded with this script
 
  function player1Move() { 
    $(".racer_table #player1_strip .active1").next().addClass("active1");
    if($("#p1Finish").hasClass("active1") ) {
      alert("Mario WINS!!!");
    }
  }

  function player2Move() { 
    $(".racer_table #player2_strip .active2").next().addClass("active2");   //change the class of p2
    if($("#p2Finish").hasClass("active2") ) {
    alert("Bowser WINS!!!");
    }
  }

//Key press script
  $(document).keyup(function() {
    if(event.which == 81) {
      player1Move();
    }
  });

  $(document).keyup(function() {
    if(event.which == 80) {
      player2Move();
    }
  });  

  $("button#resetButton").click(function() {
      alert("Reseting!!!");
      location.reload();
    });

});