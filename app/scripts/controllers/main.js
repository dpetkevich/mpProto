
/**
 * @ngdoc function
 * @name mpProtoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mpProtoApp
 */
angular.module('mpProtoApp.controller.main',[])

  .controller('MainCtrl', function ($scope,$state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tabs = [
    				{
	    				title:'Client Overview',
	    				active:false,
	    				state:"main.cOverview"
    				},
    				{
	    				title:'MP Policies',
	    				active:false,
	    				state:"main"
    				},
    				{
	    				 title:'Production Reporting',
	    				 state:"main.prview",
	    				 active:true,
    				},
    				{
    					title:'Acreage Reporting',
    					active:false,
    					state:"main"
    				},
    				{
    					title:'Claims',
    					active:false,
    					state:"main"
    				},
    				{
    					title:'Units & APH',
    					active:false,
    					state:"main"
    				},
    				{
    					title:'Private Products',
    					active:false,
    					state:"main"
    				},
    ];

    $scope.go = function(route){
        $state.go(route);
    };

    

  });
