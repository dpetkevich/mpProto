angular.module('mpProtoApp.controller.prview',['mpProtoApp.service.grower','mpProtoApp.controller.modal'])

.controller('prviewCtrl', function ($scope,grower,$modal) {
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.grower=grower.grower

    $scope.coverages=grower.grower.policies[0].coverages

    $scope.csAlert = function (){
    	alert('Changing year and policy is not supported in this demo.')
    }

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

	$scope.openSigModal = function () {

	    var modalInstance = $modal.open({
	      templateUrl: "partials/modals/prModals/prAddSigDate.html",
	      controller: "modalInstanceCtrl",
	      size: 'sm',
	    });
	}

	$scope.openUploadModal = function () {

	    var modalInstance = $modal.open({
	      templateUrl: "partials/modals/prModals/prUploadDoc.html",
	      controller: "modalInstanceCtrl",
	      size: 'sm',
	    });
	}

	$scope.vCycle=1;

	$scope.validation = function(vCycle){
		switch(vCycle){
			case 1:
				vCycle++;
				break;
			case 2:
				vCycle++;

				
				break;
			case 3:
				vCycle=2;
				break;
		}
		$scope.vCycle=vCycle;

		if(vCycle==2){
			setTimeout(function()
				{	
					vCycle++;
					$scope.vCycle=vCycle;
					$scope.$apply()
				},2000)

		}
		
	}
})




