
	var cars = ['Nissan GTR', 'Acura RSX', 'Subaru STI', 'Tesla Car'];

	
	function displayCarGifs(){

		var car = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&limit=10";
		
		
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			
			var myGiphyArray = response.data;


			$.each(myGiphyArray, function(index, value){
				// console.log(value);

				var rating = value.rating;
				var pRating = $('<p>');
				

				var stillUrl = value.images.original_still.url;
				var originalURL = value.images.original.url;

				var newGif = $('<img>');
				newGif.addClass('gif')
				newGif.attr('src', stillUrl);

				$('#cars').append(newGif);

				$(".gif").on('hover',
        			 function(index, value){

           				 $(this).attr("src", stillUrl);
        			},
        			function(){
            			$(this).attr("src", originalURL);
            			console.log(this);
        		});

				
				
			});

	
		});

	}
	

	
	function renderButtons(){ 

		
		$('#CarTypes').empty();

		
		for (var i = 0; i < cars.length; i++){


			
		    var gifbtn = $('<button>') 
		    gifbtn.addClass('car'); 
		    gifbtn.attr('data-name', cars[i]);
		    gifbtn.text(cars[i]);
		    $('#CarTypes').append(gifbtn); 
		}
	}

	
	$('#addCars').on('click', function(){

		
		var car = $('#car-input').val().trim();

	
		cars.push(car);
		
		
		renderButtons();

		
		return false;
	})

	


	function emptyCars () {
		$('#cars').empty();
	}

	$(document).on('click', '.car', emptyCars);
	$(document).on('click', '.car', displayCarGifs);

	
	

	
	renderButtons();
