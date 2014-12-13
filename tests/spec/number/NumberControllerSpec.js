describe('NumberController', function() {
	var 
		$scope,
		controller,
		numberService;

	beforeEach(function(){
		//load module
		module('numberApp');

		inject(function($rootScope, $controller, _numberService_) {
    		$scope = $rootScope.$new();
    		numberService = _numberService_;
    		controller = $controller('NumberController', {
      			$scope: $scope,
      			numberService: numberService
    		});
    	});
	});

	it('deve ter o número e o tipo do número definidos no escopo', function() {
		expect($scope.number).toBeDefined();
		expect($scope.numberType).toBeDefined(); 
	});

	it('deve ter um método para retornar se o tipo do número é composto ou primo', function() {
		expect($scope.getNumberType).toBeDefined();
	});


	describe('deve armazenar o tipo do número no escopo', function() {
		it('deve atribuir "Prime" no escopo para números do tipo primo', function() {
			//given
			$scope.number = 31;

			//and
			spyOn(numberService, 'isPrime').andCallThrough();

			//when
			$scope.getNumberType();

			//then
			expect(numberService.isPrime).toHaveBeenCalledWith(31);

			//and
			expect($scope.numberType).toBe("Prime");
		});

		it('deve atribuir "Composite" no escopo para números que não são primo', function() {
			//given
			$scope.number = 22;

			//and
			spyOn(numberService, 'isPrime').andCallThrough();

			//when
			$scope.getNumberType();

			//then
			expect(numberService.isPrime).toHaveBeenCalledWith(22);

			//and
			expect($scope.numberType).toBe("Composite");
		});

	});

	it('deve armazenar "Invalid" no escopo quando um parâmetro inválido for informado', function() {
		//given
		$scope.number = "";

		//when
		$scope.getNumberType();

		//and
		expect($scope.numberType).toBe("Invalid");
	});
});