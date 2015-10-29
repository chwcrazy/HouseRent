app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'WE House'; 
  $scope.promo = 'The most popular books this month.';
  $scope.apartments = [
  	{ 
    	name: 'The Pavilion on Berry',
      image: 'img/image-1.jpg', 
    	price: 512, 
    	popularity: 4,
      description: "University of Minnesota, Twin Cities Minneapolis, MN", 
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Radius @15th',
      image: 'img/image-2.jpg', 
      price: 492, 
      popularity: 5,
      description: "University of Minnesota, Twin Cities Minneapolis, MN", 
      likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: '416 Lofts',
      image: 'img/image-3.jpg', 
      price: 460, 
      popularity: 3,
      description: "University of Minnesota, Twin Cities Minneapolis, MN", 
      likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Edge on Oak',
      image: 'img/image-4.jpg', 
      price: 532, 
      popularity: 7,
      description: "University of Minnesota, Twin Cities Minneapolis, MN", 
      likes: 0,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.apartments[index].likes += 1; 
	};
  $scope.minusOne = function(index) { 
  	$scope.apartments[index].dislikes += 1; 
	};
}]);

// $http.get('apartment.json').success(function(data) {
//    $scope.apartment = data;
// });
