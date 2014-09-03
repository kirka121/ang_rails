angular.module( 'kontract', [
  'templates-app',
  'templates-common',
  'kontract.home',
  'kontract.about',
  'kontract.club',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})
;