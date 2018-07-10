

$.index.open();


$.newWind.addEventListener('click', function(e){
	var newWindow = Alloy.createController('newWindow').getView();
	newWindow.open();
});






$.arguments.addEventListener('click', function(e){
	
	// alert('alert1' + $.campoTexto.getValue());
	var passParams = {
		'texto' : $.campoTexto.getValue(),
		'texto2' : 'texto de demo',
	};
	
	var newWindow = Alloy.createController('newWindow', passParams).getView();
	newWindow.open();
});


$.fireEvent.addEventListener('click', function(e){
	var passParams = {
		'texto' : $.campoTexto.getValue(),
		'texto2' : 'texto de demo',
	};
	
	var newWindow = Alloy.createController('newWindow').getView();
	
	Ti.App.fireEvent('win', passParams);
});



$.properties.addEventListener('click', function(e){
	var passParams = {
		'texto' : $.campoTexto.getValue(),
		'texto2' : 'texto de demo',
	};
	
	Ti.App.Properties.setString('paramsPropertie', JSON.stringify(passParams));
	
	var newWindow = Alloy.createController('newWindow').getView();
	newWindow.open();
	
	
});





