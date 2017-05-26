angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.sessions', {
    url: '/sessions',
	params: {
		slotId: "",
		dayNr: "",
		slotType: "",
		title: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/sessions.html',
        controller: 'sessionsCtrl'
      }
    }
  })

  .state('tabsController.session', {
    url: '/session',
	params: {
		sessionId: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/session.html',
        controller: 'sessionCtrl'
      }
    }
  })

  .state('speakers', {
    url: '/speakers',
    templateUrl: 'templates/speakers.html',
    controller: 'speakersCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.schedule', {
    url: '/schedule',
    views: {
      'tab2': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});