'use strict';

var app = angular.module('honeyBook');

app.controller('mainCtrl', function($scope, User)  {
    User.getUser()
        .then(response => {
            $scope.contactList = response.data;
        })
        .catch(err =>  {
            console.log('error while getting contactList:', err);
        });
});
