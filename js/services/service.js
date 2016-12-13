'use strict';

var app = angular.module('honeyBook');

app.service('User', function($http) {
    this.getUser = () => {
        return $http.get('https://candidate-test.herokuapp.com/contacts', { cache: true});
    }
});
