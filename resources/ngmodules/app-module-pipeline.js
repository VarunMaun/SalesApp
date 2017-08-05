var app = angular.module("app.module.pipeline",["app.service"]);

app.controller('leadsMasterController', [ '$scope','$location','$filter','leadService', function($scope,$location,$filter,leadService) {
	$scope.dataList = [];
	$scope.selectedId = null;
	$scope.query = '';
	$scope.init = function () {		

		$scope.dataList = leadService.fetchAll();
		
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, 'topic')
			$scope.selectedId = $scope.dataList[0].uuid;
		}
	}
	$scope.init();

	$scope.select = function($event,o){
		$scope.selectedId = o.uuid;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedId === o.uuid)?'active':'nope');
	};

	
	
	$scope.openModalFlag = false;
	
	$scope.openNewLeadPopup = function(param){
		$scope.editableData = null;
		openModalFlag = true;
	}
	
	$scope.openEditLeadPopup = function(param){
		$scope.editableData = null;
		openModalFlag = true;
	}
	
	
	
}]);

