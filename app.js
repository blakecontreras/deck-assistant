var app = angular.module('deck-assistant', [
  'ui.router',
  'deck-assistant.main'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: './client/views/main.html',
    controller: 'MainController'
  })
})
