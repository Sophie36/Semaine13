app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ],
	$scope.liste = [];
    
    $scope.addDepense = function() {
        $scope.depenses.push({ valeur: parseInt($scope.valeur) });
    }
	$scope.addTache = function() {
         $scope.liste.push({ tache:($scope.tache) });
		 $scope.total2 = $scope.liste.length ;
	
    }
	$scope.clearSearch = function () {
        $scope.tache = "";
		
    }
    $scope.rmDepense = function(i) {
        $scope.depenses.splice(i, 1);
    }
	$scope.del = function(i) {
        $scope.liste.splice(i, 1);
		$scope.total2 = $scope.liste.length ;
	
    }
    
    $scope.doTotal = function() {
        total = 0;
        for (i = 0 ; i < $scope.depenses.length ; i++) {
            total += $scope.depenses[i].valeur;
        }
        $scope.total = total;
    }
    
    $scope.$watch("depenses", $scope.doTotal, true)