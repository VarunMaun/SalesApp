var app = angular.module("mcpq", ["ngRoute","ui.materialize","app.directives","app.module.pipeline"]);

/*ROUTING RULES*/





app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
   	 templateUrl : 'resources/ngpages/home.html',
   })
    .when("/map", {
    	 templateUrl : 'resources/ngpages/map.html',
    })
    .when("/worklist", {
    	 templateUrl : 'resources/ngpages/worklist.html',
    	 controller  : 'worklistMasterController'
    })
    .when("/leads", {
   	 templateUrl : 'resources/ngpages/leads.html',
   	controller  : 'leadsMasterController'
    })
    .when("/bids", {
   	 templateUrl : 'resources/ngpages/bids.html',
   	controller  : 'bidsMasterController'
    })
    .when("/opportunities", {
    	 templateUrl : 'resources/ngpages/opportunities.html',
    	 controller  : 'opportunityMasterController'
    })
    .when("/pipeline", {
    	 templateUrl : 'resources/ngpages/pipeline-summary.html',
    	 controller  : 'pipelineMasterController'
    	 
    })
    .when("/bids-summary", {
    	 templateUrl : 'resources/ngpages/bids-table.html',
    })
    .when("/products", {
    	 templateUrl : 'resources/ngpages/products.html',
    	 controller  : 'productMasterController'
    })
    .when("/orders", {
    	templateUrl : 'resources/ngpages/orders.html',
    })
    .when("/contracts", {
    	templateUrl : 'resources/ngpages/contracts.html',
    })
    .when("/contacts", {
    	 templateUrl : 'resources/ngpages/contacts.html',
    	 controller  : 'contactMasterController'
    })
    .when("/accounts", {
    	 templateUrl : 'resources/ngpages/accounts.html',
    	 controller  : 'accountMasterController'
    })
    
    
    
    
    
    
   .otherwise({redirectTo: '/home'}) 
});
