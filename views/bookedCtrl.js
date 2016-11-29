angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
	
	$scope.local = mainSrv.travelInfo;


	$scope.local.forEach(function(obj) {
		console.log(typeof obj.id + ' ' + typeof parseInt($stateParams.id));
		if(obj.id === parseInt($stateParams.id)) {
			console.log(obj);
			$scope.bookedLocal = obj;
			return $scope.bookedLocal;
		}
	});
		
	$scope.bgStyle = {

		"background" : "url('" + $scope.bookedLocal.image + "') no-repeat center fixed",
		"background-size" : "cover",
	



	
	
	}



})