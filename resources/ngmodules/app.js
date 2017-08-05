var app = angular.module("mcpq", ["ngRoute","ui.materialize","app.directives","app.module.pipeline"]);

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
