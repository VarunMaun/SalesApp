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



app.directive('leadForm', ['leadService','contactService','accountService','$rootScope', function(leadService,contactService,accountService,$rootScope) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/lead-form.html',
	      scope: { item: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  
	    	  scope.listOfContacts = []; 
	    	  
		    	  
		    	  scope.lead = jQuery.extend(true, {}, scope.item);;
		    	  
		    	  
		    	  scope.newContact = {};
		    	  scope.newAccount = {};
		    	  
		    	  
		    	  scope.useExistingContact = false;
		    	  scope.useExistingAccount = false;
		    	  
		    	  scope.toggleContactSelection = function(v){
		    		  scope.useExistingContact = v;
		    	  }
		    	  
		    	  scope.toggleAccountSelection = function(v){
		    		  scope.useExistingAccount = v;
		    	  }
		    	  
		    	  scope.selectedContact= {};
		    	  scope.allContacts=contactService.fetchAll();
		    	  
		    	  scope.selectedAccount= {};
		    	  scope.allAccounts=accountService.fetchAll();
		    	  
		    	  
		    	  
		    	  
		    	  scope.saveLead = function(){
		    		  var emitObject = {};
		    		  emitObject.lead = scope.lead;
		    		  if(scope.useExistingContact){
		    			  emitObject.contact =   scope.selectedContact;
		    		  }
		    		  else{
		    			  emitObject.contact  = scope.newContact;
		    		  }
		    		  
		    		  if(scope.useExistingAccount){
		    			  emitObject.account =   scope.selectedAccount;
		    		  }
		    		  else{
		    			  emitObject.account  = scope.newAccount;
		    		  }
		    		  
		    		  $rootScope.$broadcast('createUser', emitObject);
		    		  $rootScope.$broadcast('closeNewUserPopup', {});
		    	  }
		    	  
		    	  scope.cancelForm = function(){		    		  
		    		  $rootScope.$broadcast('closeNewUserPopup', {});
		    	  }
		    	  
		    	  
		    	  
	      },
	      
	      
	      
	      
	  	
	  };
	}]);



