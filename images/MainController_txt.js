app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Our Community Projects'; 
  $scope.promo = 'Let\'s make meaningful and lasting changes around us';
  $scope.apps = [

	{ 
	    cover: 'images/FBPA.jpg', 
	    name: 'Fort Bend Pets Alive',
 		url: "https://www.fortbendpetsalive.org",
		url2: "https://www.facebook.com/FortBendPetsAlive/",
		url3: "https://www.fortbendpetsalive.org/donations/"
	  }, 
	{ 
	    cover: 'images/SOCA.png', 
	    name: 'Saving Our Companion Animals', 
 		url: "http://soca-fbc.org",
		url2: "https://www.facebook.com/soca.fortbendcounty/",
		url3: "https://www.paypal.com/fundraiser/charity/2249273"    
	  }, 
	  { 
	    cover: 'images/peanut.png', 
	    name: 'A Place for Peanuts', 
	    url: "https://www.aplaceforpeanut.com",
	    url2: "https://www.facebook.com/aplaceforpeanut/",
	    url3: "https://www.paypal.me/APFP"
	  },
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);