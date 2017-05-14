app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Our Community Projects'; 
  $scope.promo = 'Let\'s make meaningful and lasting changes around us';
  $scope.products = [
  	{ 
    	name: 'A Place for Peanuts', 
    	price: 15, 
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/peanut.png',
    	likes: 0,
  	}, 
  	{ 
    	name: 'TextbookConsultants', 
    	price: 5,
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/TB_logo.jpg',
    	likes: 0,
  	}, 
  	{ 
    	name: 'Continued Fort Bend Apartment Locators service for future residents of the great community', 
    	price: 10,
    	pubdate: new Date('2017', '01', '01'), 
    	cover: 'images/image_1.png',
    	likes: 0,
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);