 var playerOneScore = 0;
    var playerTwoScore = 0;
    var counter = 0;
    var gameStatus = true;
    var player;
    var tie;
    var incrementer = 0;

angular.module('TicApp', [])
    .controller('TTTController',  function ($scope){
          $scope.board = [" "," "," "," "," "," "," "," "," "];
          
// function TTTController($scope){
//    $scope.board = [" "," "," "," "," "," "," "," "," "];
//    $scope.incrementer = 0;
        $scope.resetGame = function(){
            $scope.board = [" "," "," "," "," "," "," "," "," "];
            incrementer = 0;
            counter = 0;
            tie = null;
            gameStatus = true;
            player = "Player 1";
            document.getElementById('title').innerHTML = "Next Round!";
            document.getElementById('dofdof').style.backgroundImage = "";
            document.getElementById('dofdof').style.border = "";
            document.getElementById('dofdof').style.zIndex = "";
          }


winNum = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

     $scope.clicks = function (cellIndex){
      if (gameStatus == true){
          if ($scope.board[cellIndex] === " "){
               if (counter % 2 == 0){
                         $scope.board[cellIndex]= "X";
                         player = "Player 1";
                         console.log($scope.board[cellIndex]);
                         
                    }

               else {
                    $scope.board[cellIndex]= "O";
                    player = "Player 2";
                    console.log($scope.board[cellIndex]);                             
                    }

                    counter++;
                    console.log(player);
                    incrementer++;
               }         
          
       console.log("Current Incrementer" + " " + incrementer);
            // console.log(winNum[i]);
        //this compßares the index WITHIN the array winNum and checks to see whether they are all equal to each other with regards to the board. So -- if [0 == 1 == 2], this translates as being part of the array winNum.
      for (var i = 0; i < 8; i++){
        if ($scope.board[winNum[i][0]] == $scope.board[winNum[i][1]] && $scope.board[winNum[i][1]] == $scope.board[winNum[i][2]]) {
          //this checks to see if the array is filled with clicks and is currently not empty
            if($scope.board[winNum[i][0]] != " "){
              tie = false;
               if (player == "Player 1") { 
                    playerOneScore ++;
                    document.getElementById('p1').innerHTML = "Player One Score: " + playerOneScore;
                    document.getElementById('title').innerHTML = "P-1 WINS!";
                     setTimeout(function(){
                           document.getElementById('dofdof').style.backgroundImage = "url('images/ironman_test.jpg')";
                           document.getElementById('dofdof').style.zIndex =1;
                           document.getElementById('dofdof').style.border= "5px solid black";                
                    },1500);
                 } //closes if player == player1

                 else if (player == "Player 2"){
                      playerTwoScore++;

                      document.getElementById('p2').innerHTML = "Player Two Score: " + playerTwoScore;
                      document.getElementById('title').innerHTML = "P-2 WINS!";
                      setTimeout(function(){
                            document.getElementById('dofdof').style.backgroundImage = "url('images/thor.jpg')";
                            document.getElementById('dofdof').style.zIndex =1;
                            document.getElementById('dofdof').style.border= "5px solid black";
                          },1500);                          
                   }//close else if     
                          console.log("Player 1 Score =" + playerOneScore);
                          console.log("Player 2 Score =" + playerTwoScore);
                          gameStatus = false;
                          
             }//closes the 2nd if     
      
        }  //close the 1st if
                else if (incrementer == 9 && tie !== false) {
                      console.log("TIE");                                      
                      gameStatus = false;
                      document.getElementById('title').innerHTML = "GAME IS TIED";
                      
                      setTimeout(function(){
                            document.getElementById('dofdof').style.backgroundImage = "url('images/tie.jpg')";
                            document.getElementById('dofdof').style.zIndex =1;
                            document.getElementById('dofdof').style.border= "5px solid black";
                              },1500);  
                                           
                } //closes the else if

        } //closes the for loop  
    } //closes $scope.clicks
  }//game logic (true false)
//closing curly for TTTcontroller
// }
    });

