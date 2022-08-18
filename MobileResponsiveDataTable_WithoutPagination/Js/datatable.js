var  request,totalResult;
var startEntry = 1;
var endEntry = 10;

//Call from HTML
function callApi()
{
	var path ="https://swapi.dev/api/people/";
	
	 createrequest("GET",path);
}

//Get Api response
function createrequest(method,path) {
	var result,count,previous,next;

	request = new XMLHttpRequest();

	request.open(method, path);

	request.onload = getResponse;
	request.send();
	
}
function getResponse()
{
	
	var response = request .responseText;

			var json = $.parseJSON(response);

			$.each(json, function(key, value) {
				if (key == "results") {
					totalResult=value;
				} else if (key == "count") {
					count = value;
				} else if (key == "previous") {
					previous = value;
				} else if (key == "next") {
					next = value;
				}
				
				
			});
			
	drawRespTable(totalResult,count,previous,next);
}


var films = function ( data) 
{
	var films_data ;
	for(var i=0; i<data.films.length; i++)
	{
		if(i==0)
			films_data = data.films[i];
		else
			films_data = films_data +" , "+data.films[i];
	}
	return films_data;
}

var species = function ( data) 
{
	var species_data = "";
	for(var i=0; i<data.species.length; i++)
	{
		if(i==0)
			species_data = data.species[i];
		else
			species_data = species_data +" , "+data.species[i];
	}
	return species_data;
}

var vehicles = function ( data ) 
{
	var vehicles_data = "";
	for(var i=0; i<data.vehicles.length; i++)
	{
		if(i==0)
			vehicles_data = data.vehicles[i];
		else
			vehicles_data = vehicles_data +" , "+data.vehicles[i];
	}
	return vehicles_data;
}

var starships = function ( data ) 
{
	var starships_data = "";
	for(var i=0; i<data.starships.length; i++)
	{
		if(i==0)
			starships_data = data.starships[i];
		else
			starships_data = starships_data +" , "+data.starships[i];
	}
	return starships_data;
}

function drawRespTable(result,count,previous,next)
{
	

	//Datatable creation
	
        $('#respTable').DataTable({
		data:result,
		columns:bodydata,
		searching : false,
		"bLengthChange": true,
		"lengthMenu": [ 10 ],
		"paging":true,
		responsive: true
	});
}

var bodydata = [ { data: 'name' },
	{ data: 'height' },
	{ data: 'mass' },
	{ data: 'hair_color'},
	{ data: 'skin_color'},
	{ data: 'eye_color'},
	{ data: 'birth_year' },
	{ data: 'gender'},
	{ data: 'homeworld'},
	{ data: null, render:films},
	{ data: null, render:species},
	{ data: null, render:vehicles},
	{ data: null, render:starships},
	{ data: 'created' },
	{ data: 'edited'},
	{ data: 'url'}];

