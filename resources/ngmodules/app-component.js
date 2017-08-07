var app = angular.module("app.directives", ["app.service"]);



app.directive('ngConfirmClick', [
                                 function() {
                                     return {
                                         link: function (scope, element, attr) {
                                             var msg = attr.ngConfirmClick || "Are you sure?";
                                             var clickAction = attr.confirmedClick;
                                             element.bind('click', function (event) {
                                                 if (window.confirm(msg)) {
                                                     scope.$eval(clickAction)
                                                 }
                                             });
                                         }
                                     };
                             }]);




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
	    		
	    		
	    		angular.element(document).ready(function() {
	    			$(document).ready(function(){
	    				
	    				$('.sideMenuToggleLink').click(function(){
	    					if($('.side-bar').hasClass('slide-out-menu')){
	    						$('.side-bar').removeClass('slide-out-menu');	
	    					}
	    					else{
	    						$('.side-bar').addClass('slide-out-menu');
	    					}
	    				});
	    				
	    				$('.pageLinks a').click(function(){
	    					if($('.side-bar').hasClass('slide-out-menu')){
	    						$('.side-bar').removeClass('slide-out-menu');	
	    					}
	    				});
	    				
	    				
	    				
	    				
	    				
	    			});
	    		});
	      },
	  	
	  };
	} ]);



app.directive('stageView', ['$location', function($location) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/stage-view.html',
	      scope: { stages: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  scope.computeCurveClass=function(index){
	    		  
	    		  var returnVal = '';
	    		  
	    		  if(0==index){
	    			  returnVal = returnVal + 'curve-left';
	    		  }
	    		  else{
	    			  returnVal = returnVal + ' left-end ';
	    		  }
	    		  
	    		  if((scope.stages.list.length-1)==index){
	    			  returnVal = returnVal +' curve-right ';
	    		  }
	    		  
	    		  var indexCurrent = scope.stages.list.indexOf(scope.stages.current);
	    		  
	    		  if(index>indexCurrent){
	    			  returnVal = returnVal +' incomplete ';
	    		  }
	    		  
	    		  if(index>(indexCurrent+1)){
	    			  returnVal = returnVal +' incompleteArrow ';
	    		  }
	    		  
	    		  if(index==indexCurrent && scope.stages.badending){
	    			  returnVal = returnVal +' forceerror ';
	    		  }
	    		  
	    		  
	    		  return returnVal;
	    	  }
	    	  scope.computeWidth = function(){
	    		  if(scope.stages.list.length>0){
	    			  return Math.floor(100/scope.stages.list.length);  
	    		  }
	    		  else{
	    			  return 100;
	    		  }
	    		  
	    		  
	    	  }

	    	  
	    		angular.element(document).ready(function() {
	    				console.log(scope.stages);
	    				
	    		});
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
	    	  
	    	  scope.stages={};
	    	  scope.stages.list=['new','evaluation','qualified'];
	    	  scope.stages.current=scope.lead.leadStatus;
	    		  if('disqualified'==scope.stages.current){
	    			  scope.stages.current = 'qualified';
	    			  scope.stages.badending = true;
	    		  }
	    	  
	    	  
	    	  
	    	  
	    	  scope.openOpportunityFormPopupFlag = false;
	    		
	    		scope.openNewOpportunityForm = function(){
	    			scope.openOpportunityFormPopupFlag = true;
	    		};
	    		
	    		 scope.$on('closeOpportunityFormPopup', function(evt, data) {
	    			 	scope.openOpportunityFormPopupFlag = false;
	    			  });
	    		
	    	  
	    	  
	    	  
	    		angular.element(document).ready(function() {
	    			$(document).ready(function(){
	    				$('ul.tabs').tabs();	
	    			});
	    			});
	    	  
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



app.directive('opportunityForm', ['leadService','contactService','accountService','$rootScope', function(leadService,contactService,accountService,$rootScope) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/opportunity-form.html',
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  
	    	  scope.listOfContacts = []; 
	    	  
		    	  
		    	  
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
		    	  
		    	  
		    	  
		    	  
		    	  scope.saveOpp = function(){
		    		  $rootScope.$broadcast('closeOpportunityFormPopup', {});
		    	  }
		    	  
		    	  scope.cancelForm = function(){		    		  
		    		  $rootScope.$broadcast('closeOpportunityFormPopup', {});
		    	  }
		    	  
		    	  
		    	  
	      },
	      
	      
	      
	      
	  	
	  };
	}]);


app.directive('bidDetails', ['bidService', function(bidService) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/bid-details.html',
	      scope: { bid: '=' },
	      link: function(scope, elem, attrs) {
	    	  
	    	  scope.commonUtil = commonUtil;
	    	  scope.$watch('bid', function() {
	    	  
	    	  scope.activeBid = bidService.fetchById(1);
	    	  scope.activeBid.topic = scope.bid.topic;
	    	  scope.activeBid.stage = scope.bid.stage;
	    	  
	    	  
	    	  
	    	  scope.stages={};
	    	  scope.stages.list=['offerability','solutioning','pricing','proposal'];
	    	  scope.stages.current=scope.bid.stage;
	    	  
	    	  
	    		scope.bidConfigPopupFlag = false;
	    		scope.openBigConfig = function(){
	    			scope.bidConfigPopupFlag = true;
	    		}
	    		
	    		
	    		scope.$on('closeBidConfigPopup', function(evt, data) {
	    		 	scope.bidConfigPopupFlag = false;
	    		  });
	    		
	    		
	    	  });
	    	  
	      },
	  	
	  };
	}]);



app.directive('productDetails', [ function() {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/product-details.html',
	      scope: { product: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	      },
	  	
	  };
	} ]);


app.directive('contactDetails', [ function() {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/contact-details.html',
	      scope: { contact: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  angular.element(document).ready(function() {
	    			$(document).ready(function(){
	    				$('ul.tabs').tabs();	
	    			});
	    			});
	      },
	  	
	  };
	} ]);

app.directive('accountDetails', [ function() {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/account-details.html',
	      scope: { account: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  angular.element(document).ready(function() {
	    			$(document).ready(function(){
	    				$('ul.tabs').tabs();	
	    			});
	    			});
	    	  
	      },
	  	
	  };
	} ]);



app.directive('opportunityDetails', [ function() {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/opportunity-details.html',
	      scope: { opportunity: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  
	    	  scope.$watch('opportunity', function() {
	    	  scope.stages={};
	    	  scope.stages.list=['new','evaluation','qualified'];
	    	  scope.stages.current=scope.opportunity.status;
	    		  if('disqualified'==scope.stages.current){
	    			  scope.stages.current = 'qualified';
	    			  scope.stages.badending = true;
	    		  }
	    	  
	    
	    	  
	    	  
	    	  
	    	  angular.element(document).ready(function() {
	    			$(document).ready(function(){
	    				$('ul.tabs').tabs();	
	    			});
	    			});
	    	  
	    	  });
	    	  
	      },
	  	
	  };
	} ]);



app.directive('worklistCalendar', [ function() {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/worklist-calendar.html',
	      scope: { events: '=' },
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  angular.element(document).ready(function() {
	    				
	    		  console.log('Events:');
	    		  console.log(scope.events);
	    					
	    					$('#worklist-calendar').fullCalendar({
	    						header: {
	    							left: 'prev,next today',
	    							center: 'title',
	    							right: 'listDay,listWeek,month'
	    						},

	    						// customize the button names,
	    						// otherwise they'd all just say "list"
	    						views: {
	    							listDay: { buttonText: 'list day' },
	    							listWeek: { buttonText: 'list week' }
	    						},

	    						defaultView: 'month',
	    						defaultDate: '2017-05-12',
	    						navLinks: true, // can click day/week names to navigate views
	    						editable: true,
	    						eventLimit: true, // allow "more" link when too many events
	    						events:  scope.events
	    					});
	    					
	    				});
	    				
	    				
	    	  
	      },
	  	
	  };
	} ]);


app.directive('bidConfig', ['bidService','productService','accountService','$rootScope', function(bidService,productService,accountService,$rootScope) {
	  return {
	      restrict: 'E',
	      replace: 'true',
	      templateUrl : 'resources/ngcomponents/bid-config.html',
	      link: function(scope, elem, attrs) {
	    	  scope.commonUtil = commonUtil;
	    	  scope.activeBid = bidService.fetchById(1);
	    	  console.log("Active Bid:");
	    	  console.log(scope.activeBid);
	    	  
	    	  
	    	  scope.saveBidDetails = function(){
	    		  $rootScope.$broadcast('updateBid', {});
	    		  $rootScope.$broadcast('closeBidConfigPopup', {});
	    	  }
	    	  
	    	  scope.closeBidConfigPopup = function(){
	    		  $rootScope.$broadcast('closeBidConfigPopup', {});
	    	  }
	    	  
	    	  angular.element(document).ready(function() {
	    			 $('ul.tabs').tabs();
	    			 $('select').material_select();
	    			 
	    			 $('#available-product-list-wrap a').click(function(){
	    				 $('#available-product-list-wrap').hide(); 
	    				 $('#selected-product-details').show();
	    			 });
	    			 
	    			 $('#selected-product-details .closeDetails').click(function(){
	    				 $('#available-product-list-wrap').show(); 
	    				 $('#selected-product-details').hide();
	    			 });
	    			 
	    			 
	    	    });
	    	  
	    	  
	    	  
	    	  
	    	  
	    	  /*Address Config*/
	    	  
	    	  
	    	  
	    	  
	    	  scope.addressList = [];
	    	  scope.newAddress = Address();
	    	  
	    	  scope.addressList.push({"city":"Gandhinagar",
	    		  "country":"India",
	    		  "district":"",
	    		  "line1":"385/5",
	    		  "line2":"Sector 29",
	    		  "line3":"",
	    		  "nickname":"Home Address",
	    		  "pinCode":"382030",
	    		  "state":"Gujarat",
	    		  "discount":0.5,
	    		  "uuid":"91c3a54d-eee0-6208-ff55-ab2a0cfed1e2"});
	    	  
	    	  scope.addressList.push({"city":"Gandhinagar",
	    		  "country":"India",
	    		  "district":"",
	    		  "line1":"Garima Park",
	    		  "line2":"Kudasan",
	    		  "line3":"DAIICT Road",
	    		  "nickname":"Office Address",
	    		  "pinCode":"382009",
	    		  "state":"Gujarat",
	    		  "discount":0,
	    		  "uuid":"91c3a54d-eee0-6208-ff66-ab2a0cfed1e2"});
	    	  
	    	  
	    	  
	    	  scope.saveNewAddress = function(){
	    		  scope.newAddress.uuid = commonUtil.guid();
	    		  scope.newAddress.discount = 0.0;
	    		  scope.addressList.push(scope.newAddress);
	    		  scope.newAddress = Address();
	    	  }
	    	  
	    	  scope.deleteAddress = function(addressToDelete){
	    		  var indexToDelete = -1;
	    		  for(var iter=0;iter<scope.addressList.length;iter++){
	    			  if(addressToDelete.uuid==scope.addressList[iter].uuid){
	    				indexToDelete = iter;
	    			  }
	    		  }
	    		  scope.addressList.splice(indexToDelete, 1);
	    		  scope.$apply(); 
	    	  }
	    	  
	    	  
	    	  
	    	  /*Product Config*/
	    	  
	    	  scope.queryAvailProducts = '';
	    	  scope.availabLeProductList = productService.fetchAll();
	    	  
	    	  scope.selectedProduct = scope.availabLeProductList[0];
	    	  scope.selectedProductAddSites = null;
	    	  
	    	  
	    	  scope.selectProduct = function(prod){
	    		  scope.selectedProduct =  prod; 
	    	  }
	    	  
	    	  scope.addProductToSites = function(){
	    		  
	    		  if(null != scope.selectedProductAddSites){
	    			  var selectedSiteList = [];
	    			  for(var iter=0;iter<scope.selectedProductAddSites.length;iter++){
	    				  selectedSiteList.push(scope.selectedProductAddSites[iter].uuid);
	    			  }
	    			  
	    			  
	    			  for(var iter=0;iter<scope.addressList.length;iter++){
	    				  
	    				  if(-1 != selectedSiteList.indexOf(scope.addressList[iter].uuid)){
	    				  
	    				   var productList = scope.addressList[iter].productList;
	    				   if(null == productList){
	    					   productList= [];
	    				   }
	    				   
	    				   
	    				   
	    				   
	    				   
	    				   var prodToAdd = $.extend(true, {}, scope.selectedProduct);
	    				   prodToAdd.quantity=1;
	    				   prodToAdd.discount=0.0;
	    				   prodToAdd.tax=0.0;
	    				   
	    				   productList.push(prodToAdd);
	    				   
	    				   scope.addressList[iter].productList = productList;
	    				  }
	    				   
	    			  }
	    			  
	    			  
	    			  scope.selectedProductAddSites = []; 
	    			  
	    			  
	    		  }
	    		  
	    		  }
	    	  
	    	  
	    	  /*Pricing*/
	    	  
	    	  scope.accountLevelDiscount = 0.0;
	    	  
	    	  /*Account*/
	    	  
	    	  scope.useExistingAccount=true;
	    	  
	    	  scope.toggleAccountSelection = function(v){
	    		  scope.useExistingAccount = v;
	    	  }
	    	  
	    	  scope.selectedAccount= {};
	    	  scope.allAccounts=accountService.fetchAll();
	    	  
	    	  
	      },
	  	
	  };
	}]);