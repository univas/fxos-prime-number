app.factory('numberService', function () {
	
	var ns = {};

	ns.isPrime = function(number) {
		var cont = 0;
		if(typeof(number) === 'string' || number < 0 || number == null) return null;
		for(i = 0; i <= number; i++) {
			
			if(number%i == 0) 
				cont++;

			if(number == i && cont != 2)
				return false;
			//alert(cont);
		}
		return true;
	};

	return ns;

});