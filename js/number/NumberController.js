app.controller('NumberController', function($scope, numberService){

	$scope.number = 0;
	$scope.numberType = "Invalid";

	$scope.getNumberType = function() {
		var type;
		type = numberService.isPrime($scope.number);
		if(type !== null) {
			if(type) {
				$scope.numberType = "Prime";
			} else {
				$scope.numberType = "Composite";
			}
		} else {
			$scope.numberType = "Invalid";
		}
	};

});