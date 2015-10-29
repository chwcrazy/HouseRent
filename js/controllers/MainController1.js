app.controller('MainController', ['$scope', 'aptdata', function($scope, aptdata) { 
  // $scope.title = 'This Month\'s Bestsellers'; 
  // $scope.promo = 'The most popular books this month.';
  aptdata.success(function(data) { 
    $scope.apartments = data; 
  });
  // $http.get('apartment.json').success(function(data) {
  //  $scope.apartments = data;
  // });
 //  $scope.plusOne = function(index) { 
 //  	$scope.apartments[index].likes += 1; 
	// };
 //  $scope.minusOne = function(index) { 
 //  	$scope.apartments[index].dislikes += 1; 
	// };
}]);

app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) { 
  forecast.success(function(data) { 
    $scope.fiveDay = data; 
  });
}]);

