var app = angular.module('deck-assistant', [
  'ui.router',
  'deck-assistant.main',
  'deck-assistant.factories'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: './client/views/main.html',
    controller: 'MainController'
  })
})
