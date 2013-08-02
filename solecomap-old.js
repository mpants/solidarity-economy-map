var currentcategory = "none";
var currentpractice = "";
var currenttype = "";
var currentneed = "";
var DEFAULT_ICON_URL = 'http://solidaritypiedmont.org/icons/flower.png';
var BASE_URL = "http://solidaritypiedmont.org/icons/";
var results2 = document.getElementById('results');

	var infoWindow = new google.maps.InfoWindow();

function initialize() {

	/*
	 *   fetchData();  // begin retrieving data from table, and put it on the map

	 map = new google.maps.Map(document.getElementById('map-canvas'), {
	 center: new google.maps.LatLng(37.4, -122.1),
	 zoom: 9,
	 mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
	 }

	 google.maps.event.addDomListener(window, 'load', initialize);
	 */

	var tableId = '15dnctYCRxg6mFNggT0bxV19WSw3dt18lDC_115s';
	var locationColumn = 'Location';
	var nameColumn = 'Name';
	var iconUrlColumn = 'Icon';

	var category = '';
	var results2 = document.getElementById('results');
	var queryphrase = document.getElementById('queryphrase');

	results2.innerHTML = "<br/>Discover local places and groups on the map by the <strong>Need</strong> they meet, the economic <strong>Practices</strong> they participate in, or the <strong>Type</strong> of organization they are.";

	//Code for list view

	//Put all button functions here
	//Food

	$('#need-list').change(function() {
		category = $('#need-list').val();
		updateCategoryTwo(tableId, locationColumn, category, 'NeedsJoined');

	});

	//Sourcing (local sourcing)
	var practicelocal = document.getElementById("practice-local");
	practicelocal.onclick = function() {
		category = 'Sourcing';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//Ownership (local ownership)
	var practiceown = document.getElementById("practice-localown");
	practiceown.onclick = function() {
		category = 'Ownership';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//Community
	var practicecommunity = document.getElementById("practice-community");
	practicecommunity.onclick = function() {
		category = 'Involvement';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//Commons
	var practicecommons = document.getElementById("practice-commons");
	practicecommons.onclick = function() {
		category = 'Commons';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//Health
	var practicehealth = document.getElementById("practice-health");
	practicehealth.onclick = function() {
		category = 'Health';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//labor
	var practicelabor = document.getElementById("practice-labor");
	practicelabor.onclick = function() {
		category = 'Labor';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//barter
	var practicebarter = document.getElementById("practice-barter");
	practicebarter.onclick = function() {
		category = 'Barter';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//pricing
	var practicepricing = document.getElementById("practice-pricing");
	practicepricing.onclick = function() {
		category = 'Pricing';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//currencies
	var practicecurrencies = document.getElementById("practice-currencies");
	practicecurrencies.onclick = function() {
		category = 'Currencies';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//purchasing
	var practicepurchasing = document.getElementById("practice-purchasing");
	practicepurchasing.onclick = function() {
		category = 'Purchasing';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//sustainable
	var practicesustainable = document.getElementById("practice-sustainable");
	practicesustainable.onclick = function() {
		category = 'Sustainable';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//justice
	var practicejustice = document.getElementById("practice-social");
	practicejustice.onclick = function() {
		category = 'Justice';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//All
	var practiceall = document.getElementById("practice-all");
	practiceall.onclick = function() {
		category = '';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'PracticesJoined');
		return false;
	}
	//TYPES
	//Commons
	var typecommons = document.getElementById("types-commons");
	typecommons.onclick = function() {
		category = 'Commons';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//Coops
	var typecoop = document.getElementById("types-coops");
	typecoop.onclick = function() {
		category = 'Coops';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//Gardens
	var typegarden = document.getElementById("types-gardens");
	typegarden.onclick = function() {
		category = 'Gardens';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//DIY
	var typediy = document.getElementById("types-diy");
	typediy.onclick = function() {
		category = 'Diy';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//CSA
	var typecsa = document.getElementById("types-csa");
	typecsa.onclick = function() {
		category = 'Farms';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//FINANCE
	var typefinance = document.getElementById("types-finance");
	typefinance.onclick = function() {
		category = 'Finance';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//LEARNING
	var typelearning = document.getElementById("types-learning");
	typelearning.onclick = function() {
		category = 'Learning';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//MARKETPLACE
	var typemarketplace = document.getElementById("types-marketplace");
	typemarketplace.onclick = function() {
		category = 'Marketplace';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//Nonprofit
	var typenonprofit = document.getElementById("types-nonprofits");
	typenonprofit.onclick = function() {
		category = 'Nonprofits';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//service
	var typeservice = document.getElementById("types-services");
	typeservice.onclick = function() {
		category = 'Services';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//social
	var typesocial = document.getElementById("types-social");
	typesocial.onclick = function() {
		category = 'Social';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//thrift
	var typethrift = document.getElementById("types-thrift");
	typethrift.onclick = function() {
		category = 'Thrift';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//all
	var typeall = document.getElementById("types-all");
	typeall.onclick = function() {
		category = '';
		updateCategoryTwo(layer, tableId, locationColumn, category, 'TypesJoined');
		return false;
	}
	//Zoom to Carrboro
	var zoomcarrboro = document.getElementById("zoom-carrboro");
	zoomcarrboro.onclick = function() {
		zoomToAddress(35.910186, -79.075127, 14, map);
		return false;
	}
	//Zoom to Chapel Hill
	var zoomchapelhill = document.getElementById("zoom-chapelhill");
	zoomchapelhill.onclick = function() {
		zoomToAddress(35.913245, -79.055901, 12, map);
		return false;
	}
	//Zoom to Durham
	var zoomdurham = document.getElementById("zoom-durham");
	zoomdurham.onclick = function() {
		zoomToAddress(35.994033, -78.89861, 12, map);
		return false;
	}
	//Zoom to Pittsboro
	var zoompittsboro = document.getElementById("zoom-pittsboro");
	zoompittsboro.onclick = function() {
		zoomToAddress(35.72015, -79.17724, 14, map);
		return false;
	}
	//Zoom to Saxapahaw
	var zoomsaxapahaw = document.getElementById("zoom-saxapahaw");
	zoomsaxapahaw.onclick = function() {
		zoomToAddress(35.947361, -79.321962, 14, map);
		return false;
	}
	//Zoom to Hillsborough
	var zoomhillsborough = document.getElementById("zoom-hillsborough");
	zoomhillsborough.onclick = function() {
		zoomToAddress(36.07542, -79.09973, 14, map);
		return false;
	}
	//Zoom to All
	var zoomall = document.getElementById("zoom-all");
	zoomall.onclick = function() {
		zoomToAddress(35.960144, -78.985289, 11, map);
		return false;
	}
	var mapStyles = [{

		featureType : "landscape",
		elementType : "geometry",
		stylers : [{
			visibility : "on"
		}, {
			lightness : 80
		}, {
			gamma : 9.99
		}]
	}, {
		featureType : "road.arterial",
		stylers : [{
			visibility : "simplified"
		}, {
			saturation : -95
		}, {
			lightness : 26
		}]
	}, {
		featureType : "transit",
		stylers : [{
			visibility : "off"
		}]
	}, {
		featureType : "poi",
		stylers : [{
			visibility : "off"
		}]
	}, {
		featureType : "road.local",
		stylers : [{
			visibility : "on"
		}, {
			lightness : 10
		}]
	}, {
		featureType : "road.highway",
		stylers : [{
			visibility : "off"
		}]
	}, {
		featureType : "administrative.neighborhood",
		stylers : [{
			visibility : "on"
		}]
	}, {
		featureType : "water",
		stylers : [{
			visibility : "simplified"
		}, {
			saturation : -5
		}, {
			lightness : 47
		}]
	}];

	map = new google.maps.Map(document.getElementById('map-canvas'), {
		center : new google.maps.LatLng(35.960144, -78.985289),
		zoom : 11,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		styles : mapStyles,
		scrollwheel : true,
		noClear : true,
		mapTypeControl : false,
		panControl : false,
		zoomControl : true,
		zoomControlOptions : {
			style : google.maps.ZoomControlStyle.SMALL,
			position : google.maps.ControlPosition.RIGHT_TOP
		},
		scaleControl : false,
		streetViewControl : false,

	});
   /*
	var layer = new google.maps.FusionTablesLayer({
		query : {
		 select : locationColumn,
		 from : tableId
		 },
		map : map,
		templateId : 4,
		styleId : 2
	});
    */
    
	google.maps.event.addDomListener(document.getElementById('category'), 'change', function() {
		updateCategoryTwo(tableId, locationColumn);
	});
	$(function() {
		$('#myModal').reveal();
	});
}

function createMarker(coordinate, url, content) {
	//(passed: Place, icon, names)
	url2 = BASE_URL + url;
	var marker = new google.maps.Marker({
		map : map,
		position : coordinate,
		icon : new google.maps.MarkerImage(url)
	});
	google.maps.event.addListener(marker, 'click', function(event) {
		//COordinate = LATLNG object
		infoWindow.setPosition(coordinate);
		infoWindow.setContent(content);
		infoWindow.open(map);
	});
};

function fetchData() {

	// Construct a query to get data from the Fusion Table
	// EDIT this list to include the variables for columns named above
	var query = 'SELECT ' + latitudeColumn + ',' + longitudeColumn + ',' + iconUrlColumn + ',' + infowindowContentColumn + ' FROM ' + tableID;
	var encodedQuery = encodeURIComponent(query);

	// Construct the URL
	var url = ['https://www.googleapis.com/fusiontables/v1/query'];
	url.push('?sql=' + encodedQuery);
	url.push('&key=' + apiKey);
	url.push('&callback=?');

	// Send the JSONP request using jQuery
	$.ajax({
		url : url.join(''),
		dataType : 'jsonp',
		success : onDataFetched
	});
}

/*
function onDataFetched(data) {
var rows = data['rows'];
var iconUrl;
var content;
var coordinate;

// Copy each row of data from the response into variables.
// Each column is present in the order listed in the query.
// Starting from 0.
// EDIT this if you've changed the columns, above.
for (var i in rows) {
coordinate = new google.maps.LatLng(rows[i][0], rows[i][1]);
iconUrl = rows[i][2];
content = rows[i][3];

if (iconUrl) {// ensure not empty
createMarker(coordinate, iconUrl, content);
} else {
createMarker(coordinate, DEFAULT_ICON_URL, content);
}
}
}
*/
// Update the query sent to the Fusion Table Layer based on
// the user selection in the select menu

function initMap(tableId)
{
		var wherequery = "SELECT Name, Location, Icon FROM " + tableId;
}
function updateCategoryTwo(tableId, locationColumn, category, sortby) {

	currentcategory = category;
	//layer.setMap(map);
	//document.getElementById("debug").innerHTML="Getting food...";
	if (sortby == 'NeedsJoined') {
		currentneed = category;
		var listquery = "SELECT Name, Location, Icon FROM " + tableId + " WHERE NeedsJoined LIKE '%" + category + "%' AND PracticesJoined LIKE '%" + currentpractice + "%' AND TypesJoined LIKE '%" + currenttype + "%'";
		var wherequery = "NeedsJoined LIKE '%" + category + "%' AND PracticesJoined LIKE '%" + currentpractice + "%' AND TypesJoined LIKE '%" + currenttype + "%'";
	} else if (sortby == 'PracticesJoined') {
		currentpractice = category;
		var listquery = "SELECT Name, Location, Icon FROM " + tableId + " WHERE NeedsJoined LIKE '%" + currentneed + "%' AND PracticesJoined LIKE '%" + category + "%' AND TypesJoined LIKE '%" + currenttype + "%'";
		var wherequery = "NeedsJoined LIKE '%" + currentneed + "%' AND PracticesJoined LIKE '%" + category + "%' AND TypesJoined LIKE '%" + currenttype + "%'";
	} else if (sortby == 'TypesJoined') {
		currenttype = category;
		var listquery = "SELECT Name, Location, Icon FROM " + tableId + " WHERE NeedsJoined LIKE '%" + currentneed + "%' AND PracticesJoined LIKE '%" + currentpractice + "%' AND TypesJoined LIKE '%" + category + "%'";
		var wherequery = "NeedsJoined LIKE '%" + currentneed + "%' AND PracticesJoined LIKE '%" + currentpractice + "%' AND TypesJoined LIKE '%" + category + "%'";
	}
	
	document.getElementById('results').innerHTML = wherequery;
	//EITHER NEED TO COMBINE NEED COLUMNS OR DO MULTIPLE LAYER ADDS.  Goofy.

	//var listquery = "SELECT Name, Location FROM " + tableId + " WHERE '" + category + "' in ('Need 1','Need 2','Need 3')";

	/*
	 layer.setOptions({
	 query : {
	 select : locationColumn,
	 from : tableId,
	 where : wherequery,

	 }
	 });
	 */

	var encodedlistquery = encodeURIComponent(listquery);
	var url2 = ['https://www.googleapis.com/fusiontables/v1/query'];
	url2.push('?sql=' + encodedlistquery);
	url2.push('&key=AIzaSyDkbZmlojVJ6CVwF5W4BGLwf4tbcouNlt4');
	url2.push('&callback=?');
	whatquery = "";
	if (currentneed != "") {
		whatquery += "I'm looking for " + currentneed;
		if (currentpractice != "") {
			whatquery += " that practices " + currentpractice;
			if (currenttype != "") {
				whatquery += " and is a " + currenttype;
			}
		}

	}
	queryphrase.innerHTML = whatquery;

	document.getElementById('results').innerHTML = "Results - Click the name to zoom to the location.";
	$.ajax({
		url : url2.join(''),
		dataType : 'jsonp',
		success : function(data) {

			var rows = data['rows'];
			for (var i in rows) {
				//var coordinate = new google.maps.LatLng(rows[i][0],rows[i][1]);

				var names = rows[i][0];
				var icons = rows[i][2];
				var locations = rows[i][1];
				codeAddress(rows[i][1], names, icons);

				var dataElement = document.createElement('div');
				var nameElement = document.createElement('p');
				nameElement.innerHTML = names;
				nameElement.className = 'name';

				var a = document.createElement('a');
				a.appendChild(nameElement);
				a.title = names;
				a.href = "";
				a.onclick = (function(locations) {
					return function() {
						zoomToAddressTwo(locations,a.title);
						return false;
					};
				})(locations);

				dataElement.appendChild(a);
				document.getElementById('results').appendChild(dataElement);

				/*
				 if (icons) {// ensure not empty
				 createMarker(locations, icons, names);
				 } else {
				 createMarker(locations, DEFAULT_ICON_URL, names);
				 }

				 var dataElement = document.createElement('div');
				 var nameElement = document.createElement('p');
				 nameElement.innerHTML = names;
				 nameElement.className = 'name';

				 var a = document.createElement('a');
				 a.appendChild(nameElement);
				 a.title = names;
				 a.href = "";
				 a.onclick = (function(locations) {
				 return function() {
				 zoomToAddressTwo(locations);
				 return false;
				 };
				 })(locations);

				 dataElement.appendChild(a);
				 results.appendChild(dataElement);
				 */
			}
			dataElement = "";
		}
	});

	return false;
}

function codeAddress(locations, names, icons) {
	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({
		'address' : locations
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var msg = String(results[0].geometry.location) + ' from geocode';
			//alert("CodeAddress: " + msg);
			//var mylat = results[0].geometry.location.getLatitude();
			//var mylong = results[0].geometry.location.getLongitude();
			place = results[0].geometry.location;

			if (icons) {// ensure not empty
				createMarker(place, icons, names);
			} else {
				createMarker(place, DEFAULT_ICON_URL, names);
			}

			/*
			 map.setCenter(results[0].geometry.location);
			 var marker = new google.maps.Marker({
			 map : map,
			 position : results[0].geometry.location
			 });
			 */

		} else {
			//alert("Geocoder 1 was not successful for the following reason: " + status);
		}
	});

}

function zoomToAddress(mylat, mylong, zoom, map) {

	map.setZoom(zoom);
	map.setCenter(new google.maps.LatLng(mylat, mylong));
	return false;
};

function zoomToAddressTwo(locations,content) {
	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({
		'address' : locations
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setZoom(15);
			map.setCenter(results[0].geometry.location);
					infoWindow.setPosition(results[0].geometry.location);
		infoWindow.setContent(content);
		infoWindow.open(map);
			//var mylat = results[0].geometry.location.getLatitude();
			//var mylong = results[0].geometry.location.getLongitude();

			return false;
			/*
			 map.setCenter(results[0].geometry.location);
			 var marker = new google.maps.Marker({
			 map: map,
			 position: results[0].geometry.location
			 })
			 ;
			 */
		} else {
			//alert("Geocoder 2 was not successful for the following reason: " + status);
		}
	});

};

google.maps.event.addDomListener(window, 'load', initialize);
