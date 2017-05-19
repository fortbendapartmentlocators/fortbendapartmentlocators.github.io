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
 		url: "https://www.soca-fbc.org",
		url2: "https://www.facebook.com/soca.fortbendcounty/",
		url3: "https://www.paypal.com/donate/?token=KD42aCf0umIHLhrj4Pl17sFfvQ50hAjiz3h7bu_NTfRMOt31DusTuEwuBBbDLRK9iYXaUG"    
	  }, 
	  { 
	    cover: 'images/peanut.png', 
	    name: 'A Place for Peanuts', 
	    url: "https://www.aplaceforpeanut.com",
	    url2: "https://www.facebook.com/aplaceforpeanut/",
	    url3: "https://www.paypal.me/APFP"
	  },
	  {
	    cover: 'images/logo_8.png',
	    name: 'Fort Bend Apartment Locators',
	    url: "https://www.fortbendapartmentlocators.com",
		url2: "https://www.facebook.com/Fort-Bend-Apartment-Locators-170813793441790",
		url3: "https://www.fortbendapartmentlocators.com"  
	  },
	  {
	    cover: 'images/TB_logo.png',
	    name: 'Textbook Consultants',
	    url: "https://textbookconsultants.com",
	    url2: "https://www.facebook.com/textbookconsultants",
	    url3: "https://www.paypal.com/donate/?token=GmcFyeJHCDpcdDaSvUdzVVqvmJ4gVoIjvFSDRPaDGL9-zwPjgG8cyIlAwmtBOfzC9QATm0"

	  }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);