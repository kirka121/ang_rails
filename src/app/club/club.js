/**
 * Club module
 */
angular.module( 'kontract.club', [
  'ui.state',
  'ngResource'
])

/**
 * Define the route that this module relates to, and the page template and controller that is tied to that route
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'clubs', {
    url: '/clubs',
    views: {
      "main": {
        controller: 'ClubsCtrl',
        templateUrl: 'club/clubs.tpl.html'
      }
    },
    data:{ pageTitle: 'Clubs' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ClubsCtrl', function ClubsController( $scope, ClubRes ) {
  $scope.clubs = ClubRes.query();
  $scope.title = 'testing';
})

.factory( 'ClubRes', function ( $resource ) {
  return $resource('../clubs.json');
})
;