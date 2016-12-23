
	var cars = ['Nissan GTR', 'Acura RSX', 'Subaru STI', 'Tesla Car'];

	
	function displayCarGifs(){

		var car = $(this).attr('data-name');
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&limit=10";
		
		
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

        for (var i = 0; i < response.data.length; i++) {

          var newGif = $('<img>');
          newGif.attr('src', response.data[i].images.original_still.url);
          newGif.attr('data-still', response.data[i].images.original_still.url);
          newGif.attr('data-animate', response.data[i].images.original.url);
          newGif.attr('data-state', 'still');
          newGif.addClass('img-rounded');
          newGif.attr('id', 'gif');

          $('#cars').append(newGif);
        }

	   })
	}

	function renderButtons(){ 

		
		$('#CarTypes').empty();

		
		for (var i = 0; i < cars.length; i++){

			
			
		    var gifbtn = $('<button class="car btn btn-primary">') 
		    gifbtn.attr('data-name', cars[i]);
		    gifbtn.text(cars[i]);
		    $('#CarTypes').append(gifbtn); 
		}
	}

	
	$('#addCars').on('click', function(){

		
		var car = $('#car-input').val().trim();

	
		cars.push(car);
		
		
		renderButtons();

    $('.form-control').val("")
		
		return false;
	})

	


	function emptyCars () {
		$('#cars').empty();
	}

	$(document).on('click', '.car', emptyCars);
	$(document).on('click', '.car', displayCarGifs);

  $(document).on('click', '#gif', function (){
            var state = $(this).attr('data-state');

            if (state == 'still'){
              $(this).attr('src', $(this).data('animate'));
              $(this).attr('data-state', 'animate');
            }
            else {
               $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
          });


	

	
	renderButtons();
