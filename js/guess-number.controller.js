var app = angular.module('app', ['timer'])

app.controller('GuessTheNumberController', GuessTheNumberController);
	
function GuessTheNumberController($scope) {
    $scope.lst = [];
   
    
	$scope.verifyGuess = function () {
        $scope.deviation = $scope.original - $scope.guess;
		$scope.noOfTries = $scope.noOfTries + 1;
        $scope.falseAnswer = $scope.deviaiton != 0;

        if ($scope.deviation == 0) {
            
            $scope.stopTimer();
            

        }


        if (!($scope.guess === undefined || $scope.guess === '')) {
            $scope.lst.push({ item: $scope.guess, needed: false });
                $scope.NoItemError = '';
            } else {
                $scope.NoItemError = 'Please enter an item';
        }		
    }   


    $scope.initializeGame = function () {
		$scope.noOfTries = 0;
		$scope.original = Math.floor((Math.random() * 999) + 1);
		$scope.guess = null;
        $scope.deviation = null;
         
    }
    	
    $scope.initializeGame();


    $scope.timerRunning = true;

    $scope.startTimer = function () {
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function () {
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.$on('timer-stopped', function (event, args) {
        console.log('timer-stopped args = ', args);
    });

}



