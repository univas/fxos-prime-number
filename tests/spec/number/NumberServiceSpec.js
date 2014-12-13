describe('NumberService', function() {
	var numberService;

	beforeEach(function(){
		//load module
		module('numberApp');

		inject(function(_numberService_) {
      		numberService = _numberService_;
    	});
	});

	it('deve ter o método para verificar se o número é primo', function() {
		expect(angular.isFunction(numberService.isPrime)).toBe(true);
	});

	it('deve verificar se o número é primo', function() {
		expect(numberService.isPrime(0)).toBe(false);
		expect(numberService.isPrime(1)).toBe(false);
		expect(numberService.isPrime(2)).toBe(true);
		expect(numberService.isPrime(3)).toBe(true);
		expect(numberService.isPrime(4)).toBe(false);
		expect(numberService.isPrime(5)).toBe(true);
	});

	it('deve retornar null para valores inválidos', function() {
		expect(numberService.isPrime()).toBe(null);
		expect(numberService.isPrime(-1)).toBe(null);
		expect(numberService.isPrime('')).toBe(null);
		expect(numberService.isPrime('1')).toBe(null);
		expect(numberService.isPrime('-1')).toBe(null);
		expect(numberService.isPrime('anystring')).toBe(null);
	});
});