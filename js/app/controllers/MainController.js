function MainController($scope) {
  $scope.name = 'Callie',
  $scope.email = 'callie@email.com',
  $scope.phone = '012-3456-7890'
}
 
angular
  .module('app')
  .controller('MainController', MainController);