var FormValidation = function(){
	var _init = function(options){
		var container = document.querySelector(options.container);
		container = container ? container : document;

		var elems = container.querySelectorAll(options.selector);
		var submitButton = container.querySelector(options.submit);
		var success = container.querySelector(options.success);

		if(!elems || !submitButton) return;

		submitButton.addEventListener('click', function(){
			if(_checkRequired(elems) && success) success.classList.remove('hidden');
		});
	}

	var _checkRequired = function(elems){
		var validForm = true;
		for(var i = 0; i < elems.length; i++){
			var isValid = true;
			var elem = elems[i];

			if(elem.name === 'email'){
				var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
				if(!pattern.test(elem.value)) isValid = false;
			} if(elem.name === 'phoneNumber'){
				var pattern = /^\d{10}$/;
				if(!pattern.test(elem.value)) isValid = false;
			} else {
				if(elem.value.length <= 0) isValid = false;
			}


			if(!isValid){
				validForm = false;
				elem.nextElementSibling.classList.remove('hidden');
			} else {
				elem.nextElementSibling.classList.add('hidden');
			}
		}

		if(validForm) return true;
	}

	return {
		init: _init
	}
}();