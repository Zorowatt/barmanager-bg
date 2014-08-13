var app = angular.module('app',['ngResource','ngRoute','ui.bootstrap']);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

//    var routeUserChecks = {
//        adminRole: {
//            authenticate: function(auth) {
//                return auth.isAuthorisedForRole('admin');
//            }
//        }
//    };

    $routeProvider
        .when('/', {
            templateUrl: 'partials/main/home',
            controller: 'HomeCtrl'
        })
        .when('/whoWeAre', {
            templateUrl: 'partials/main/whoWeAre'
            //controller: 'HomeCtrl'
        })
        .when('/teachers', {
            templateUrl: 'partials/teachers/teachers',
            controller: 'TeachersCtrl'
        })
        .when('/addresses', {
            templateUrl: 'partials/main/addresses'
            //controller: 'TeachersCtrl'
        })
        .when('/contact', {
            templateUrl: 'partials/main/contact'
            //controller: 'TeachersCtrl'
        })
        .when('/cocktaibarman', {
            templateUrl: 'partials/main/cocktaibarman'
            //controller: 'TeachersCtrl'
        })
//        .otherwise ({
//        redirectTo: '/'
//        });



});

app.run(function($rootScope, $location){
//    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
//        if (rejection === 'non authorized'){
//            $location.path('/');
//        }
//    })
    $rootScope.$on('$viewContentLoaded',function(){
        jQuery('html, body').animate({ scrollTop: 0 }, 200);
    });


});