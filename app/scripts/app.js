

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
    //'ct.ui.router.extras'
    //'mgcrea.ngStrap',
    //'mgcrea.ngStrap.tooltip',

  ])
  .config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("/");
  //$stickyStateProvider.enableDebug(true);
  // Now set up the states
      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "partials/main.html",
          controller:"MainCtrl",
          

        })
        //prview
        .state('main.prview', {
          abstract: true,
          url: "prview",
          template:"<ui-view/>",

          

        })
          //children of prview
          .state('main.prview.mainForm', {
            url: "/mainForm",
            templateUrl: "partials/main.prview.html",
            controller:"prviewCtrl",
            

          })
          .state('main.prview.Esig', {
           url: "/Esig",
           templateUrl: "partials/main.prviewEsig.html",
           controller:"prviewCtrl",
          
          })
        //cOverview
        .state('main.cOverview', {
          url: "cOverview",
          templateURL:"partials/main.cOverview.html",
          
        })
});