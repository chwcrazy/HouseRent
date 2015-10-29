app.factory('aptdata', ['$http', function($http) { 
  return $http.get('apartment.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);