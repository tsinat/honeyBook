'use strict';

var app = angular.module('honeyBook');

app.controller('mainCtrl', function($scope, User, $timeout)  {
    User.getUser()
        .then(response => {
            console.log(response.data);
            $timeout(function(){
                $scope.contactList = response.data;
            },6000)
        })
        .catch(err =>  {
            console.log('error while getting contactList:', err);
        });
});
