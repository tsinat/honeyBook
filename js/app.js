'use strict';

var app = angular.module('honeyBook', ['ui.router','angular-loading-bar']);

app.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    $stateProvider
        .state('contact', {
            url: '/contact',
            templateUrl: 'index.html',
            controller: 'mainCtrl'
        });
        $urlRouterProvider.otherwise('/contact');
});
