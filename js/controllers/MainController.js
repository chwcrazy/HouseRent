// var app = angular.module("myApp", ['ui.bootstrap']);

app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'WE House'; 
  $scope.promo = 'The most popular apartments this month.';
  $scope.apartments = [
    { 
      name: 'The Pavilion on Berry', 
      price: 512, 
      pubdate: new Date('2015', '09', '08'), 
      image: 'img/image-1.jpg',
      popularity: 4,
      description: "UC Berkeley, SF, CA",
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'Radius @15th', 
      price: 492, 
      pubdate: new Date('2015', '08', '01'), 
      image: 'img/image-2.jpg',
      popularity: 5,
      description: "UC Berkeley, SF, CA",
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: '416 Lofts', 
      price: 460, 
      pubdate: new Date('2015', '07', '08'), 
      image: 'img/image-3.jpg',
      popularity: 3,
      description: "UC Berkeley, SF, CA",
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'Edge on Oak', 
      price: 532, 
      pubdate: new Date('2015', '09', '25'), 
      image: 'img/image-4.jpg',
      popularity: 7,
      description: "UC Berkeley, SF, CA",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Delta Garden', 
      price: 786, 
      pubdate: new Date('2015', '09', '26'), 
      image: 'img/image-4.jpg',
      popularity: 15,
      description: "University at Buffalo, Buffalo, NY",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Fountain View', 
      price: 999, 
      pubdate: new Date('2015', '09', '23'), 
      image: 'img/image-3.jpg',
      popularity: 11,
      description: "University at Buffalo, Buffalo, NY",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Villas Apt', 
      price: 888, 
      pubdate: new Date('2015', '09', '26'), 
      image: 'img/image-2.jpg',
      popularity: 9,
      description: "University at Buffalo, Buffalo, NY",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Chesnut Road Apt', 
      price: 666, 
      pubdate: new Date('2015', '09', '21'), 
      image: 'img/image-1.jpg',
      popularity: 10,
      description: "University at Buffalo, Buffalo, NY",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Palo Alto Garden', 
      price: 1024, 
      pubdate: new Date('2015', '09', '29'), 
      image: 'img/image-2.jpg',
      popularity: 14,
      description: "Stanford University, Palo Alto, CA",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Mars Garden', 
      price: 2048, 
      pubdate: new Date('2015', '09', '23'), 
      image: 'img/image-3.jpg',
      popularity: 33,
      description: "Stanford University, Palo Alto, CA",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Earth Apartment', 
      price: 4096, 
      pubdate: new Date('2015', '09', '26'), 
      image: 'img/image-4.jpg',
      popularity: 44,
      description: "Stanford University, Palo Alto, CA",
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Moon House', 
      price: 1111, 
      pubdate: new Date('2015', '09', '21'), 
      image: 'img/image-1.jpg',
      popularity: 55,
      description: "Stanford University, Palo Alto, CA",
      likes: 0,
      dislikes: 0
    }
  ];

  $scope.plusOne = function(index) { 
    $scope.apartments[index].popularity += 1; 
  };
  $scope.minusOne = function(index) { 
    $scope.apartments[index].dislikes += 1; 
  };
  // $scope.tmp = $scope.apartments

  $scope.tmp1 = [];
  $scope.tmp2 = [];
  for (var i = 0, len = $scope.apartments.length; i < len; i++) {
    $scope.tmp1[i] = $scope.apartments[i];
  };
  for (var i = 0, len = $scope.apartments.length; i < len; i++) {
    $scope.tmp2[i] = $scope.apartments[i];
  };
  $scope.tmp1.sort(function (a, b) {
    if (a.popularity > b.popularity){
      return -1
    }
    if (a.popularity < b.popularity){
      return 1
    }
    return 0
  });

  $scope.tmp2.sort(function (a, b) {
    if (a.price > b.price){
      return -1
    }
    if (a.price < b.price){
      return 1
    }
    return 0
  });
  $scope.cliPop = function () {
    for (var i = 0, len = $scope.apartments.length; i < len; i++) {
      $scope.apartments[i] = $scope.tmp1[i];
    }
    $scope.filteredTodos = [],
    $scope.currentPage = 1,
    $scope.numPerPage = 6,
    $scope.maxSize = 5;
    
    $scope.numPages = function () {
      return Math.ceil($scope.apartments.length / $scope.numPerPage);
    };
    
    $scope.$watch('currentPage + numPerPage', function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;
      
      $scope.filteredTodos = $scope.tmp1.slice(begin, end);
    });

    };
  $scope.cliPri = function () {
      for (var i = 0, len = $scope.apartments.length; i < len; i++) {
        $scope.apartments[i] = $scope.tmp2[i];
      }
      $scope.filteredTodos = [],
      $scope.currentPage = 1,
      $scope.numPerPage = 6,
      $scope.maxSize = 5;
      
      $scope.numPages = function () {
        return Math.ceil($scope.apartments.length / $scope.numPerPage);
      };
      
      $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage),
        end = begin + $scope.numPerPage;
        
        $scope.filteredTodos = $scope.tmp2.slice(begin, end);
      });
    };
  

  // $scope.updateData = function(){
  // $http.get('/apartments').success(function(data) {
  //        $scope.apartments = data;// Update Model-- Line X
  //      });
  // };



   $scope.filteredTodos = [],
   $scope.currentPage = 1,
   $scope.numPerPage = 6,
   $scope.maxSize = 5;
  
  $scope.numPages = function () {
    return Math.ceil($scope.apartments.length / $scope.numPerPage);
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
    end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.apartments.slice(begin, end);
  });









}]);