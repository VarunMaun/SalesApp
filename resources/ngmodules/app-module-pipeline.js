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


app.controller('bidsMasterController', [ '$scope','$location','$filter','bidService','pipelineService', function($scope,$location,$filter,bidService,pipelineService) {
	$scope.dataList = [];
	$scope.selectedBid = {};
	$scope.query = '';

	$scope.selectBid = function(o){
		$scope.selectedBid = o;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedBid.uuid === o.uuid)?'active':'nope');
	};
	
	$scope.sortOrder = 'topic';
	$scope.sortData = function(sortField){
		$scope.sortOrder = sortField;
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, sortField)
			$scope.selectedBid = $scope.dataList[0];
		}
	}
	
	$scope.filterGroup = '';
	$scope.filterData = function(filterGroup){
		$scope.filterGroup = filterGroup;
		if('all'==filterGroup){
			$scope.dataList = pipelineService.fetchAll();
		}
		$scope.sortData($scope.sortOrder);
	}
	
	
	$scope.openNewBidPopupFlag = false;
	$scope.openNewBidForm = function(){
		$scope.openNewBidPopupFlag = true;	
	}
	$scope.$on('closeBidConfigPopup', function(evt, data) {
	 	$scope.openNewBidPopupFlag = false;
	  });
  

	
	
	
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



app.controller('worklistMasterController', [ '$scope','$location','$filter','worklistService', function($scope,$location,$filter,worklistService) {
	
	$scope.worklistItems = worklistService.fetchAll();
	
}]);


app.controller('pipelineMasterController', [ '$scope','$location','$filter','pipelineService', function($scope,$location,$filter,pipelineService) {
	
	
	
	
	$scope.init = function () {		
		$scope.commonUtil = commonUtil;
		
		$scope.allBids = pipelineService.fetchAll();
		
		$scope.bids = {};
		$scope.bids['offerability'] = [];
		$scope.bids['solutioning'] = [];
		$scope.bids['pricing'] = [];
		$scope.bids['proposal'] = [];
		
		$scope.sum = {};
		$scope.sum['offerability'] = 0;
		$scope.sum['solutioning'] = 0;
		$scope.sum['pricing'] = 0;
		$scope.sum['proposal'] = 0;
		
		
		for(var iter = 0;iter<$scope.allBids.length;iter++){
			var stage = $scope.allBids[iter].stage;
			$scope.bids[stage].push($scope.allBids[iter]);
			$scope.sum[stage] = $scope.sum[stage] + $scope.allBids[iter].value;
		}
	}
	$scope.init();
	
	
}]);








app.controller('opportunityMasterController', [ '$scope','$location','$filter','opportunityService', function($scope,$location,$filter,opportunityService) {
	
	$scope.dataList = [];
	$scope.selectedOpportunity = {};
	$scope.query = '';

	$scope.selectOpportunity = function(o){
		$scope.selectedOpportunity = o;
	}
	$scope.checkActive = function (o) {		
	     return (($scope.selectedOpportunity.uuid === o.uuid)?'active':'nope');
	};
	
	$scope.sortOrder = '';
	$scope.sortData = function(sortField){
		$scope.sortOrder = sortField;
		if($scope.dataList.length>0){
			$scope.dataList =	$filter('orderBy')($scope.dataList, sortField)
			$scope.selectedOpportunity = $scope.dataList[0];
		}
	}
	
	$scope.filterGroup = '';
	$scope.filterData = function(filterGroup){
		$scope.filterGroup = filterGroup;
		if('all'==filterGroup){
			$scope.dataList = opportunityService.fetchAll();
		}
		else{
		}
		$scope.sortData($scope.sortOrder);
	}
	
	
	$scope.openOpportunityFormPopupFlag = false;
	
	$scope.openNewOpportunityForm = function(){
		$scope.openOpportunityFormPopupFlag = true;
	};
	
	 $scope.$on('closeOpportunityFormPopup', function(evt, data) {
		 	$scope.openOpportunityFormPopupFlag = false;
		  });
	
	
	 
	$scope.init = function () {		
		$scope.filterData('all');
		$scope.sortData('topic');
	}
	$scope.init();
	
	
	
}]);

