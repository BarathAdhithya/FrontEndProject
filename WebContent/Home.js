var app = angular.module('myApp', ['ngRoute','ngCookies','regmyApp','blogApp','forumApp','allusers1','allusers','loginApp','allusers']);
app.config(function($routeProvider) {
  $routeProvider
  
  .when('/Home', {
	    templateUrl : 'HTML/Home.html',
	    controller  : 'Logincontroller',
	    controllerAs:'vm'
	 })

   .when('/register', {
    templateUrl : 'HTML/SignUp.html',
    controller  : 'SignUp'
 })
 
  .when('/login', {
    templateUrl : 'HTML/Login.html',
    controller  : 'Logincontroller',
    	controllerAs:'vm'
 })
 
  .when('/blog', {
    templateUrl : 'HTML/Blog.html',
    controller  : 'Blog'
 })
 
  .when('/forum', {
    templateUrl : 'HTML/Forum.html',
    controller  : 'Forumcontroller'
 })
 
 .when('/friend', {
    templateUrl : 'HTML/Friend.html',
    controller  : 'alluserctrl'
 })
.when('/allfriends', {
    templateUrl : 'HTML/allfriends.html',
    controller  : 'allfriendsctrl'
 })
 .when('/nwrequests', {
	    templateUrl : 'HTML/nwrequests.html',
	    controller  : 'allfriendsctrl'
	 })

  .otherwise({redirectTo: '/'});
});
