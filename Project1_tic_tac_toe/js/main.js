function TTTController($scope){
	$scope.board = [" "," "," "," "," "," "," "," "," "];

	var counter = 0;
	var player;

	


		$scope.clicks = function (cellIndex){
		if ($scope.board[cellIndex] === " "){
			if (counter % 2 == 0){
				    counter++
					$scope.board[cellIndex]= "EXES";
					player = "player1";
					console.log(player);
					console.log($scope.board[cellIndex]);
				}

			else {
				counter++
				$scope.board[cellIndex]= "OHS";
				player = "player2";
				console.log(player);
				console.log($scope.board[cellIndex]);						
				}		
			}		
		}
		
		for (var i = 0; i < 9; i++)
		if ($scope.board[0] + $scope.board[1] + $scope.board[2] === 3){
			alert("WACHIOA");
		}

//closing curly for TTTcontroller
}

		



