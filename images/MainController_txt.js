app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Our Community Projects'; 
  $scope.promo = 'Let\'s make meaningful and lasting changes around us';
  $scope.products = [

	{ 
	    cover: 'images/FBPA.jpg', 
	    name: 'Fort Bend Pets Alive', 
	  }, 
	{ 
	    cover: 'images/SOCA.png', 
	    name: 'Saving Our Companion Animals', 
	  }, 
	  { 
	    cover: 'images/peanut.png', 
	    name: 'A Place for Peanuts', 
	  },
	  {
	    cover: 'images/logo_8.png',
	    name: 'Fort Bend Apartment Locators',
	  },
	  {
	    cover: 'images/TB_logo.png',
	    name: 'Textbook Consultants',

	  }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);