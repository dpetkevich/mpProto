

/**
 * @ngdoc overview
 * @name mpProtoApp
 * @description
 * # mpProtoApp
 *
 * Main module of the application.
 */
angular
  .module('mpProtoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'mpProtoApp.controller.main',
    'mpProtoApp.controller.prview',

  ])
  .config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "partials/main.html",
          controller:"MainCtrl"
        })

      .state('main.prview', {
        url: "/prview",
        templateUrl: "partials/main.prview.html",
        controller:"prviewCtrl"
      });
});