var app = angular.module('deck-assistant', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: './client/views/main.html',
    // controller: 'MainController'
  })
})
