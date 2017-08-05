var app = angular.module("app.module.pipeline",["app.service"]);

app.controller('leadsMasterController', [ '$scope','$location','$filter','leadService', function($scope,$location,$filter,leadService) {
	$scope.dataList = [];
	$scope.selectedId = null;
	$scope.query = '';



	$scope.select = function($event,o){
		$scope.selectedId = o.uuid;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedId === o.uuid)?'active':'nope');
	};
	

	$scope.sortOrder = '';
	
	$scope.sortData = function(sortField){
		
		$scope.sortOrder = sortField;
		
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, sortField)
			$scope.selectedId = $scope.dataList[0].uuid;
		}
	}
	
	
	$scope.filterGroup = '';
	
	$scope.filterData = function(filterGroup){
	
		$scope.filterGroup = filterGroup;
		
		if('all'==filterGroup){
			$scope.dataList = leadService.fetchAll();
		}
		else{
			$scope.dataList = leadService.fetchByStatus(filterGroup);
		}
		
		$scope.sortData($scope.sortOrder);
				
	}
	


	
	
	
	
	$scope.openModalFlag = false;
	
	$scope.openNewLeadPopup = function(param){
		$scope.editableData = {};
		openModalFlag = true;
	}
	
	$scope.openEditLeadPopup = function(param){
		$scope.editableData = null;
		openModalFlag = true;
	}
	
	
	 $scope.$on('createUser', function(evt, data) {
		 	console.log("Lead Created:");
		 	console.log(data);
		 	$scope.openModalFlag = false;
		  });
	 
	 $scope.$on('closeNewUserPopup', function(evt, data) {
		 	$scope.openModalFlag = false;
		  });
	 
	 
	
	
	$scope.init = function () {		

		$scope.filterData('all');
		
		$scope.sortData('topic');
	}
	
	$scope.init();
	
	
}]);

