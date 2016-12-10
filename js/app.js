var app = angular.module('honeyBook', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'mainCtrl'
        });
        $urlRouterProvider.otherwise('/profile');
});
