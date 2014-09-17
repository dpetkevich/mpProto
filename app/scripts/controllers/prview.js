angular.module('mpProtoApp.controller.prview',['mpProtoApp.service.grower','mpProtoApp.controller.modal'])

.controller('prviewCtrl', function ($scope,grower,$modal) {
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.grower=grower.grower

    $scope.coverages=grower.grower.policies[0].coverages

    $scope.openEmailModal = function () {

	    var modalInstance = $modal.open({
	      templateUrl: "partials/modals/prModals/prEmailModal.html",
	      controller: "modalInstanceCtrl",
	      size: 'lg',
	      
	    });
	}

	$scope.openPrintModal = function () {

	    var modalInstance = $modal.open({
	      templateUrl: "partials/modals/prModals/prPrintModal.html",
	      controller: "modalInstanceCtrl",
	      size: 'lg',
	      
	    });
	}

	//$scope.changeYear = alert("For the purposes of this demo, policy year is not modifiable.")

});