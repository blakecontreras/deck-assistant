var app = angular.module('deck-assistant', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    template: '<h3>Hello, world</h3>' // './client/views/main.html',
    // controller: 'MainController'
  })
})
