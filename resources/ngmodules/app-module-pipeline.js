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


app.controller('bidsMasterController', [ '$scope','$location','$filter','bidService', function($scope,$location,$filter,bidService) {
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
			$scope.dataList = bidService.fetchAll();
		}
		$scope.sortData($scope.sortOrder);
	}
	
	

	
	
	
	$scope.init = function () {		
		$scope.filterData('all');
		$scope.sortData('topic');
	}
	$scope.init();
}]);


app.controller('productMasterController', [ '$scope','$location','$filter','productService', function($scope,$location,$filter,productService) {
	$scope.dataList = [];
	$scope.selectedProduct = {};
	$scope.query = '';

	$scope.selectProduct = function(o){
		$scope.selectedProduct = o;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedProduct.uuid === o.uuid)?'active':'nope');
	};
	
	$scope.sortOrder = '';
	$scope.sortData = function(sortField){
		$scope.sortOrder = sortField;
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, sortField)
			$scope.selectedProduct = $scope.dataList[0];
		}
	}
	
	$scope.filterGroup = '';
	$scope.filterData = function(filterGroup){
		$scope.filterGroup = filterGroup;
		if('all'==filterGroup){
			$scope.dataList = productService.fetchAll();
		}
		else{
		}
		$scope.sortData($scope.sortOrder);
	}
	
	 
	$scope.init = function () {		
		$scope.filterData('all');
		$scope.sortData('productName');
	}
	$scope.init();
}]);









app.controller('contactMasterController', [ '$scope','$location','$filter','contactService', function($scope,$location,$filter,contactService) {
	$scope.dataList = [];
	$scope.selectedContact = {};
	$scope.query = '';

	$scope.selectContact = function(o){
		$scope.selectedContact = o;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedContact.uuid === o.uuid)?'active':'nope');
	};
	
	$scope.sortOrder = '';
	$scope.sortData = function(sortField){
		$scope.sortOrder = sortField;
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, sortField)
			$scope.selectedContact = $scope.dataList[0];
		}
	}
	
	$scope.filterGroup = '';
	$scope.filterData = function(filterGroup){
		$scope.filterGroup = filterGroup;
		if('all'==filterGroup){
			$scope.dataList = contactService.fetchAll();
		}
		else{
		}
		$scope.sortData($scope.sortOrder);
	}
	
	 
	$scope.init = function () {		
		$scope.filterData('all');
		$scope.sortData('first_name');
	}
	$scope.init();
}]);



app.controller('accountMasterController', [ '$scope','$location','$filter','accountService', function($scope,$location,$filter,accountService) {
	$scope.dataList = [];
	$scope.selectedAccount = {};
	$scope.query = '';

	$scope.selectAccount = function(o){
		$scope.selectedAccount = o;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedAccount.uuid === o.uuid)?'active':'nope');
	};
	
	$scope.sortOrder = '';
	$scope.sortData = function(sortField){
		$scope.sortOrder = sortField;
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, sortField)
			$scope.selectedAccount = $scope.dataList[0];
		}
	}
	
	$scope.filterGroup = '';
	$scope.filterData = function(filterGroup){
		$scope.filterGroup = filterGroup;
		if('all'==filterGroup){
			$scope.dataList = accountService.fetchAll();
		}
		else{
		}
		$scope.sortData($scope.sortOrder);
	}
	
	 
	$scope.init = function () {		
		$scope.filterData('all');
		$scope.sortData('name');
	}
	$scope.init();
}]);