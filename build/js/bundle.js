"use strict";var app=angular.module("honeyBook",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("home",{url:"/",templateUrl:"index.html",controller:"mainCtrl"}),t.otherwise("/profile")}]);var app=angular.module("honeyBook");app.controller("mainCtrl",["$scope","User",function(e,t){t.getUser().then(function(e){console.log("data:",e)})}]);var app=angular.module("honeyBook");app.service("User",["$http",function(e){this.getUser=function(){return e.get("https://candidate-test.herokuapp.com/contacts")}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRsZS5qcyIsImFwcC5qcyIsImNvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMiLCJzZXJ2aWNlcy9zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwib3RoZXJ3aXNlIiwiJHNjb3BlIiwiVXNlciIsImdldFVzZXIiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQ0FBLElBQUFBLEtBQUFDLFFBQUFDLE9BQUEsYUFBQSxhQUVBRixLQUFBRyxRQUFBQSxpQkFBQUEscUJBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFDQUUsTUFBQSxRQUNBQyxJQUFBLElBQ0FDLFlBQUEsYUFDQUMsV0FBQSxhQUVBSixFQUFBSyxVQUFBLGNDUEEsSUFBQVYsS0FBQUMsUUFBQUMsT0FBQSxZQUVBRixLQUFBUyxXQUFBLFlBQUEsU0FBQSxPQUFBLFNBQUFFLEVBQUFDLEdBQ0FBLEVBQUFDLFVBQ0FDLEtBQUEsU0FBQUMsR0FDQUMsUUFBQUMsSUFBQSxRQUFBRixPQ1BBLElBQUFmLEtBQUFDLFFBQUFDLE9BQUEsWUFFQUYsS0FBQWtCLFFBQUEsUUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFQLFFBQUEsV0FDQSxNQUFBTSxHQUFBRSxJQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdob25leUJvb2snLCBbJ3VpLnJvdXRlciddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdpbmRleC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ21haW5DdHJsJ1xuICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9wcm9maWxlJyk7XG59KTtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2hvbmV5Qm9vaycpO1xuXG5hcHAuY29udHJvbGxlcignbWFpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyKSB7XG4gICAgVXNlci5nZXRVc2VyKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcbiAgICB9KTtcbn0pO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2hvbmV5Qm9vaycpO1xuXG5hcHAuc2VydmljZSgnVXNlcicsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHRoaXMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnaHR0cHM6Ly9jYW5kaWRhdGUtdGVzdC5oZXJva3VhcHAuY29tL2NvbnRhY3RzJyk7XG4gICAgfTtcbn0pOyIsInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnaG9uZXlCb29rJywgWyd1aS5yb3V0ZXInXSk7XG5cbmFwcC5jb25maWcoKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpID0+IHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnaW5kZXguaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnbWFpbkN0cmwnXG4gICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvcHJvZmlsZScpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnaG9uZXlCb29rJyk7XG5cbmFwcC5jb250cm9sbGVyKCdtYWluQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgVXNlcikgIHtcbiAgICBVc2VyLmdldFVzZXIoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpO1xuICAgICAgICB9KVxufSk7XG4iLCJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2hvbmV5Qm9vaycpO1xuXG5hcHAuc2VydmljZSgnVXNlcicsIGZ1bmN0aW9uKCRodHRwKSB7XG4gICAgdGhpcy5nZXRVc2VyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCdodHRwczovL2NhbmRpZGF0ZS10ZXN0Lmhlcm9rdWFwcC5jb20vY29udGFjdHMnKTtcbiAgICB9XG59KTtcbiJdfQ==
