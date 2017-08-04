var app = angular.module("pipeline", ["ngRoute","ui.materialize"]);

/*ROUTING RULES*/

app.config(function($routeProvider) {
    $routeProvider
    .when("/map", {
    	 templateUrl : 'resources/ngpages/map.html',
         
    })
    .when("/leads", {
   	 templateUrl : 'resources/ngpages/leads.html',
   	controller  : 'leadsMasterController'
    })
    .when("/opportunities", {
    	 templateUrl : 'resources/ngpages/opportunities.html',
    })
    .when("/pipeline", {
    	 templateUrl : 'resources/ngpages/pipeline-summary.html',
    })
    .when("/bids-summary", {
    	 templateUrl : 'resources/ngpages/bids.html',
    })
   .otherwise({templateUrl : 'resources/ngpages/dummy.html',}) 
});


/*GENERIC CONTROLLERS*/


app.controller('sideMenuController', [ '$scope','$location', function($scope,$location) {
	$scope.title="MCPQ";
	$scope.checkActive = function (viewLocation) {		
	     return ((viewLocation === $location.path())?'active':'nope');
	};
}]);









/*PAGE CONTROLLERS*/
app.controller('leadsMasterController', [ '$scope','$location','$filter', function($scope,$location,$filter) {
	$scope.dataList = [];
	$scope.selectedData = Lead();
	$scope.query = '';
	$scope.init = function () {		
		for(var iter=0;iter<MOCK_LEADS.length;iter++){
			var l = MOCK_LEADS[iter];			
			var o = Lead();
			o.uuid = l.id.$oid;
			o.topic = l.topic;
			o.contact.firstName = l.first_name;
			o.contact.lastName = l.last_name;
			o.contact.account.name=l.account;
			o.contact.account.website='www.google.com';
			o.contact.emailAddress = l.email;
			$scope.dataList.push(o);
		}
		if($scope.dataList.length>0){
			
			
			$scope.dataList =	$filter('orderBy')($scope.dataList, 'topic')
			$scope.selectedData = $scope.dataList[0];
		}
	}
	$scope.init();

	$scope.select = function($event,o){
		$scope.selectedData = o;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedData.uuid === o.uuid)?'active':'nope');
	};
	$scope.flattenList = function(items){
		if(items.length == 0){
			return '-';
		}
		else{
			var text = '';
			for(var iter=0;iter<items.length;iter++){
				text = text + items[iter] + ',';
			}
			text = text.substr(0,(text.length-1));
			return text;
		}
	}

	
	
	$scope.openModalFlag = false;
	
	$scope.openFormPopup = function(param){
		openModalFlag = true;
	}
	
	
	
}]);

