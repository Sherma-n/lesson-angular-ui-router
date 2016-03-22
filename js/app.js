angular
  .module('TodosApp', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
    })
    .state('archive', {
      url: "/archive",
      templateUrl: "archive.html",
    });
}