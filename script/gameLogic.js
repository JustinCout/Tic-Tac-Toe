jQuery(document).ready(function () { 

//Winning Messages
var xwin = document.getElementById("xmsg");
var owin = document.getElementById("omsg");
var cats = document.getElementById("cats");
var mainTitle = document.getElementById("title");

//Game Logic
var move = 1;
var play = true;

  $('#main [id^="block"]').click(function() {

    if ($(this).text()=== "" && play) {
      //Every other number or even number%2 = 0 - thus every other click will be O
      if ((move%2) === 1) {
       $('p', this).text('X');
       } else { 
		    $('p', this).text('O');
       }
       
         move++;

         if (winner() === 0 && move === 10) {
          mainTitle.style.display = "none";
          cats.style.display = "block";
          play = false;
          } else if (winner() === "X") { 
            mainTitle.style.display = "none";
            xwin.style.display = "block"; 
            play = false;
              } else if (winner() === "O") { 
                mainTitle.style.display = "none";
                owin.style.display = "block";
                play = false;
            } 
          }     

  });
  
  //               --Winner checker--

  function winner() {

    var v1 = $("#value1").text();
    var v2 = $("#value2").text();
    var v3 = $("#value3").text();
    var v4 = $("#value4").text();
    var v5 = $("#value5").text();
    var v6 = $("#value6").text();
    var v7 = $("#value7").text();
    var v8 = $("#value8").text();
    var v9 = $("#value9").text();
    
    //Rows
    if      (v1 === v2 && v2 === v3 && v3 !="") { return v3; }
    else if (v4 === v5 && v5 === v6 && v6 !="") { return v6; }	
    else if (v7 === v8 && v8 === v9 && v9 !="") { return v9; }
    //Columns
    else if (v1 === v4 && v4 === v7 && v7 !="") { return v7; }
    else if (v2 === v5 && v5 === v8 && v8 !="") { return v8; }
    else if (v3 === v6 && v6 === v9 && v9 !="") { return v9; }
    //Diagonals
    else if (v1 === v5 && v5 === v9 && v9 !="") { return v9; }
    else if (v3 === v5 && v5 === v7 && v7 !="") { return v7; }
    //No Winner
    return 0;
    
  }

  //New Game Button
  var newGame = document.getElementById('refresh');
  newGame.onclick = refreshPage;

  function refreshPage(){
    window.location.reload();


  }

 






});