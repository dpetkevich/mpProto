angular.module('mpProtoApp.controller.modal',[])


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
.controller('modalInstanceCtrl', function ($scope, $modalInstance) {

 

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});