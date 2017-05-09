(function (angular) {
    angular.module('app', []);
})(angular);


(function (angular) {
    function controllerFn($scope, $http) {
        $scope.reservation = JSON.parse(localStorage.phebus_reservation);
        $scope.remove = function (id) {
            for(var i = 0;i<$scope.reservation.length;i++){
                if($scope.reservation[i].id === id){
                    $scope.reservation.splice(i,1);
                    break;
                }
            }
        }
        $scope.logout = function () {
            window.location.href = "/";
        }
    }
    controllerFn.$inject = ['$scope', '$http'];
    angular.module('app').controller('AdminController', controllerFn);
})(angular);