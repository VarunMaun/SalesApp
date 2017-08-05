var app = angular.module("app.directives", ["app.service"]);


/*DIRECTIVES*/


app.directive('sideMenu', ['$location', function($location) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/side-menu.html',
	      scope: { lead: '=item' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  scope.title="MCPQ";
	    	  scope.checkActive = function (viewLocation) {		
	    		     return ((viewLocation === $location.path())?'active':'nope');
	    		};
	      },
	  	
	  };
	} ]);




app.directive('leadDetails', ['leadService', function(leadService) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/lead-details.html',
	      scope: { itemid: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.$watch('itemid', function() {
	    	  scope.commonUtil = commonUtil;
	    	  scope.lead = leadService.fetchById(scope.itemid);
	    	  });
	      },
	  	
	  };
	}]);



app.directive('leadForm', ['leadService', function(leadService) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/lead-form.html',
	      scope: { itemid: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  scope.$watch('itemid', function() {
		    	  var origObj = leadService.fetchById(scope.itemid);
		    	  scope.lead = jQuery.extend(true, {}, origObj);;
		    	  });
	      },
	      
	      
	      
	      
	  	
	  };
	}]);



