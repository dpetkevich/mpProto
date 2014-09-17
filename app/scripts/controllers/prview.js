angular.module('mpProtoApp.controller.prview',['mpProtoApp.service.grower'])

.controller('prviewCtrl', function ($scope,grower) {
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.grower=grower.grower

    $scope.coverages=grower.grower.policies[0].coverages

    console.log($scope.grower.policies[0].number)

});