angular.module('mpProtoApp.controller.prview',['mpProtoApp.service.grower','mpProtoApp.controller.modal'])

.controller('prviewCtrl', function ($scope,grower,$modal) {
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.grower=grower.grower

    $scope.coverages=grower.grower.policies[0].coverages

    $scope.open = function () {

	    var modalInstance = $modal.open({
	      templateUrl: "partials/modals/prModals/prPrintModal.html",
	      controller: "modalInstanceCtrl",
	      size: 'lg',
	      
	    });
	}

});