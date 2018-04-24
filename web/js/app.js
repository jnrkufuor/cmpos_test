
var app = angular.module('pos-app',['ngRoute']);

app.run(function($rootScope, ToastService) {
    $rootScope.apiUrl = "http://cmpos-api.bycavemen.com/api"; 
    $rootScope.selectedStore = {};
    $rootScope.register ={};
    $rootScope.user_info = {};
    
    $rootScope.JAPPKEY = "yQQS8xtuWOCovG0qZhs6I/uLXsMmYh5tjMcGtXqhvtc";
})
 
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'view/layout/login.php',
    controller  : 'LoginController'
  })

  .when('/stores', {
    templateUrl : 'view/layout/stores.php',
    controller  : 'StoreController'
  })

  .when('/pos', {
    templateUrl : 'view/layout/pos.php',
    // controller  : 'AboutController'
  })


  //   .when('/riders', {
  //   templateUrl : 'view/layout/riders.php',
  //   // controller  : 'AboutController'
  // })

  //     .when('/customers', {
  //   templateUrl : 'view/layout/customers.php',
  //   // controller  : 'AboutController'
  // })

  .otherwise({redirectTo: '/'});
});


