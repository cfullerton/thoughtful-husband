angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.reminder', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/reminder.html',
        controller: 'reminderCtrl'
      }
    }
  })

  .state('tabsController.bio', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/bio.html',
        controller: 'bioCtrl'
      }
    }
  })

  .state('tabsController.preferences', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/preferences.html',
        controller: 'preferencesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});