'use strict';

var app = angular.module('honeyBook');

app.controller('mainCtrl', function($scope, User)  {
    User.getUser()
        .then(data => {
            console.log('data:', data);
        })
});
