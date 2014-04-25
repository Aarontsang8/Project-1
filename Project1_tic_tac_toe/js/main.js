    var playerOneScore = 0;
    var playerTwoScore = 0;
    var counter = 0;
    var gameStatus = true;
    var player;
    var tie;

angular.module('TicApp', ['firebase'])
    .controller('TTTController',  function ($scope){
          $scope.board = [" "," "," "," "," "," "," "," "," "];
          $scope.incrementer = 0;
 


// function TTTController($scope){
//   	$scope.board = [" "," "," "," "," "," "," "," "," "];
//   	$scope.incrementer = 0;


        $scope.resetGame = function(){
            $scope.board = [" "," "," "," "," "," "," "," "," "];
            $scope.incrementer = 0;
            counter = 0;
            gameStatus = true;
            player = "player 1";
          }


winNum = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

     $scope.clicks = function (cellIndex){
     	if (gameStatus == true){
          if ($scope.board[cellIndex] === " "){
               if (counter % 2 == 0){
                         $scope.board[cellIndex]= "X";
                         player = "player 1";
                         console.log($scope.board[cellIndex]);
                         
                    }

               else {
                    $scope.board[cellIndex]= "O";
                    player = "player 2";
                    console.log($scope.board[cellIndex]);                             
                    }

                    counter++
                    console.log(player);
                    $scope.incrementer++;
               }         
          
       console.log("Current Incrementer" + $scope.incrementer);



	         for (var i = 0; i < 8; i++){
	   
       			// console.log(winNum[i]);
          	//this compßares the index WITHIN the array winNum and checks to see whether they are all equal to each other with regards to the board. So -- if [0 == 1 == 2], this translates as being part of the array winNum.
          	if ($scope.board[winNum[i][0]] == $scope.board[winNum[i][1]] && $scope.board[winNum[i][1]] == $scope.board[winNum[i][2]]) {
          		//this checks to see if the board is currently not empty
          			if($scope.board[winNum[i][0]] != " "){
                  tie = false;
               alert(player + "  " + " Has Won!");
                   if (player == "player 1") { 
                    	  playerOneScore ++;
                        document.getElementById('p1').innerHTML = "Player One Score: " + playerOneScore;
                     }

                     else if (player == "player 2"){
                          playerTwoScore++;
                          document.getElementById('p2').innerHTML = "Player Two Score: " + playerTwoScore;
                          
                       }     
                             	console.log("Player 1 Score =" + playerOneScore);
                              console.log("Player 2 Score =" + playerTwoScore);
                              gameStatus = false;
         	       }       	
         	 //close the if
           	} 
          
                   	else if ($scope.incrementer == 9 && tie != false) {
                   		    console.log("TIE");         		
                   		    gameStatus = false;
                   		    alert('THE GAME IS A TIE');
                   		    break;
                   	}





    	  } //closes the for loop  


		}	//closes $scope.clicks

	}//game logic (true false)

//closing curly for TTTcontroller
// }
    });






