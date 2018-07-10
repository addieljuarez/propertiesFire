// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// setTimeout(function() {
	// alert('alert2: ' + args.texto + ',\n ' + args.texto2 );
// }, 3000);


setTimeout(function(){
	
	var demoPropertie = Ti.App.Properties.getString('paramsPropertie');
	var objectPropertie = JSON.parse(demoPropertie);
	
	alert('alert2: ' + objectPropertie.texto + ',\n ' + objectPropertie.texto2 );
	
	Ti.App.Properties.setString('paramsPropertie', null);
}, 2000);




$.closeWin.addEventListener('click', function(e){
	$.newWindow.close();
});


// $.newWindow.open();


Ti.App.addEventListener('win', function(e){
	$.newWindow.open();
	
	
	
	setTimeout(function() {
		alert('alert2: ' + e.texto + ',\n ' + e.texto2 );
	}, 1500);
	
});

