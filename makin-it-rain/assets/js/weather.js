$(document).ready(function() {

	var container = $( '#container' );
	var otherObjects = $( '.other-objects' );

	function parseWeather( weather ) {

		console.log( weather );

		var temp_f = weather.main.temp;
		var temp_c = ((temp_f - 32)*5)/9;

		var mainCondition =  weather.weather[0].main;
		var mainWeatherId = weather.weather[0].id;
		var mainDescription = weather.weather[0].description;

		console.log( mainCondition );
		console.log( mainDescription );
		console.log( mainWeatherId );


		if ( mainWeatherId >= 300 && mainWeatherId <= 302 || mainWeatherId == 310 || mainWeatherId == 230 || mainWeatherId == 231) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#coins-1, #coins-2, #coins-3, #coins-4, #coins-5, #coins-6' ).show();

		} 


		else if ( mainWeatherId == 311 || mainWeatherId == 312 || mainWeatherId == 321 || mainWeatherId == 232) {

			container.html('<p>Makin\' it '+mainDescription+'</p>')

			$( '#one-dollar-1, #one-dollar-2, one-dollar-flip-1, one-dollar-flip-2, one-dollar-vertical-1, one-dollar-vertical-2' ).show();
		
		} 

		else if ( mainWeatherId == 500 || mainWeatherId == 501 || mainWeatherId == 200) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#ten-dollar-1, #ten-dollar-flip-1, #ten-dollar-vertical-1, #ten-dollar-2, #ten-dollar-flip-2, #ten-dollar-vertical-2' ).show();

		}

		else if ( mainWeatherId >= 520 && mainWeatherId <= 522 || mainWeatherId == 201) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#fifty-dollar-1' ).show();
			$( '#fifty-dollar-flip-1' ).show();
			$( '#fifty-dollar-vertical-1' ).show();
			$( '#fifty-dollar-2' ).show();
			$( '#fifty-dollar-flip-2' ).show();
			$( '#fifty-dollar-vertical-2' ).show();

		} 

		else if ( mainWeatherId >= 502 && mainWeatherId <= 504 ||mainWeatherId == 202) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#hundred-dollar-1' ).show();
			$( '#hundred-dollar-flip-1' ).show();
			$( '#hundred-dollar-vertical-1' ).show();
			$( '#hundred-dollar-2' ).show();
			$( '#hundred-dollar-flip-2' ).show();
			$( '#hundred-dollar-vertical-2' ).show();

		} 

		else if ( mainWeatherId == 611 || mainWeatherId == 906) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#diamond-1' ).show();
			$( '#diamond-2' ).show();
			$( '#diamond-3' ).show();
			$( '#diamond-4' ).show();
			$( '#diamond-5' ).show();
			$( '#diamond-6' ).show();

		} 

		else {
			$('#empty-wallet').show();
			$('#container-text').show();
		}

		if ( mainCondition == "thunderstorm") {

			$( 'body' ).addClass('pulsing-animation');
		};

		$( 'p' ).fadeIn('slow', function(){ 
			console.log("done")
		});
		

	};

	
	$.ajax({

		url : "http://api.openweathermap.org/data/2.5/weather?zip=10009,us&units=imperial&appid=cd934a25c15183ae5f462460856cd3d2",
		dataType : "jsonp",

		success : function( weatherData ) {

			parseWeather( weatherData );

		},

		error : function() {

			console.log('Something went wrong with your request :(  Check that you\'re using the correct API key (your App ID)');

		}

	});

});
























