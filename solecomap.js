var currentcategory = "none";
var currentpractice = "";
var currenttype = "";
var currentneed = "";
var DEFAULT_ICON_URL = 'http://solidaritypiedmont.org/icons/flower.png';
var BASE_URL = "http://solidaritypiedmont.org/icons/";
var results2 = document.getElementById('results');
var descwindow = document.getElementById('in-map-description');
var markers = [];
var infoWindow = new google.maps.InfoWindow({
	maxWidth : 700,
	pixelOffset : new google.maps.Size(0, -30)
});

function initialize() {

	document.getElementById('in-map-description').style.display = 'none';

	//var tableId = '15dnctYCRxg6mFNggT0bxV19WSw3dt18lDC_115s';
	var tableId = '11wvoTm-ry1Cq5jz0hh0Gw7EA3xlEpmtyTlxPXI0';
	var locationColumn = 'Location';
	var latColumn = 'Latitude';
	var longColumn = 'Longitude';
	var nameColumn = 'Name';
	var iconUrlColumn = 'Icon';

	google.maps.visualRefresh = true;
	initMap(tableId);

	var category = '';
	var results2 = document.getElementById('results');
	var queryphrase = document.getElementById('queryphrase');

	results2.innerHTML = "<br/>Discover local places and groups on the map by the <strong>Need</strong> they meet, the economic <strong>Practices</strong> they participate in, or the <strong>Type</strong> of organization they are.";

	//Put all button functions here
	//Food

	$('#need-list').change(function() {
		category = $('#need-list').val();
		updateCategoryTwo(tableId, locationColumn, category, 'NeedsJoined');

	});

	$('#practice-list').change(function() {
		category = $('#practice-list').val();
		updateCategoryTwo(tableId, locationColumn, category, 'PracticesJoined');

	});

	$('#type-list').change(function() {
		category = $('#type-list').val();
		updateCategoryTwo(tableId, locationColumn, category, 'TypesJoined');
	});

	//Zoom to Carrboro
	var zoomcarrboro = document.getElementById("zoom-carrboro");
	zoomcarrboro.onclick = function() {
		document.getElementById('in-map-description').style.display = 'none';
		infoWindow.close();
		zoomToAddress(35.910186, -79.075127, 14, map);

		return false;
	}
	//Zoom to Chapel Hill
	var zoomchapelhill = document.getElementById("zoom-chapelhill");
	zoomchapelhill.onclick = function() {
		document.getElementById('in-map-description').style.display = 'none';
		infoWindow.close();
		zoomToAddress(35.913245, -79.055901, 12, map);
		return false;
	}
	//Zoom to Durham
	var zoomdurham = document.getElementById("zoom-durham");
	zoomdurham.onclick = function() {
		document.getElementById('in-map-description').style.display = 'none';

		infoWindow.close();

		zoomToAddress(35.994033, -78.89861, 12, map);
		return false;
	}
	//Zoom to Pittsboro
	var zoompittsboro = document.getElementById("zoom-pittsboro");
	zoompittsboro.onclick = function() {
		document.getElementById('in-map-description').style.display = 'none';

		infoWindow.close();

		zoomToAddress(35.72015, -79.17724, 14, map);
		return false;
	}
	//Zoom to Saxapahaw
	var zoomsaxapahaw = document.getElementById("zoom-saxapahaw");
	zoomsaxapahaw.onclick = function() {
		document.getElementById('in-map-description').style.display = 'none';

		infoWindow.close();

		zoomToAddress(35.947361, -79.321962, 14, map);
		return false;
	}
	//Zoom to Hillsborough
	var zoomhillsborough = document.getElementById("zoom-hillsborough");
	zoomhillsborough.onclick = function() {
		document.getElementById('in-map-description').style.display = 'none';

		infoWindow.close();

		zoomToAddress(36.07542, -79.09973, 14, map);
		return false;
	}
	//Zoom to All
	var zoomall = document.getElementById("zoom-all");
	zoomall.onclick = function() {
		zoomToAddress(35.960144, -78.985289, 11, map);
		infoWindow.close();
		document.getElementById('in-map-description').style.display = 'none';

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

	google.maps.event.addDomListener(document.getElementById('category'), 'change', function() {
		updateCategoryTwo(tableId, locationColumn);
	});
	$(function() {
		$('#myModal').reveal();
	});

}

function clearMarkers() {
	var i = markers.length;
	document.getElementById('in-map-description').style.display = 'none';
	for (var j = 0; j < i; j++) {
		if (markers[j] != null) {
			markers[j].setMap(null);
			markers[j] = null;
		}
	}
	return false;
}

function createMarker(coordinate, url, content, description) {
	//(passed: Place, icon, names)
	url2 = BASE_URL + url;
	var marker = new google.maps.Marker({
		map : map,
		position : coordinate,
		icon : new google.maps.MarkerImage(url)
	});
	markers.push(marker);

	google.maps.event.addListener(marker, 'click', function(event) {
		//COordinate = LATLNG object
		map.setCenter(coordinate);
		document.getElementById('in-map-description').innerHTML = "";
		var descElement = document.createElement('p');
		descElement.innerHTML = description;
		descElement.className = 'description';
		document.getElementById('in-map-description').appendChild(descElement);
		document.getElementById('in-map-description').style.display = 'inline';

		infoWindow.setPosition(coordinate);
		infoWindow.setContent(content);
		infoWindow.open(map);

	});
};

function initMap(tableId) {
	var listquery = "SELECT Name, Latitude, Longitude, Icon, Description, Location, Website, Image, Provides, Practices, Type FROM " + tableId + " WHERE Approved = 'x'"; 
	var encodedlistquery = encodeURIComponent(listquery); 
	var url2 = ['https://www.googleapis.com/fusiontables/v1/query'];
	url2.push('?sql=' + encodedlistquery);
	url2.push('&key=AIzaSyDkbZmlojVJ6CVwF5W4BGLwf4tbcouNlt4');
	url2.push('&callback=?');
	$.ajax({
		url : url2.join(''),
		dataType : 'jsonp',
		success : function(data) {

			var rows = data['rows'];
			for (var i in rows) {
				//var coordinate = new google.maps.LatLng(rows[i][0],rows[i][1]);

				var names = rows[i][0];
				var icons = rows[i][3];
				var description = rows[i][4];
				var address = rows[i][5];
				var website = rows[i][6];
				var image = rows[i][7];
				var provides = rows[i][8];
				var practices = rows[i][9];
				var type = rows[i][10];
				var locations = new google.maps.LatLng(rows[i][1], rows[i][2]);
				codeAddress(locations, names, icons, description, address, website, image, provides, practices,type);

			}
		}
	});

	return false;
}

function updateCategoryTwo(tableId, locationColumn, category, sortby) {
	clearMarkers();
	infoWindow.close();
	var content = "";
	currentcategory = category;
	//layer.setMap(map);
	//document.getElementById("debug").innerHTML="Getting food...";
	if (sortby == 'NeedsJoined') {
		currentneed = category;
		var listquery = "SELECT Name, Latitude, Longitude, Icon, Description, Location, Website, Image, Provides, Practices, Type FROM " + tableId + " WHERE NeedsJoined LIKE '%" + category + "%' AND PracticesJoined LIKE '%" + currentpractice + "%' AND Approved = 'x' AND TypesJoined LIKE '%" + currenttype + "%'";

	} else if (sortby == 'PracticesJoined') {
		currentpractice = category;
		var listquery = "SELECT Name, Latitude, Longitude, Icon, Description, Location, Website, Image, Provides, Practices, Type FROM " + tableId + " WHERE NeedsJoined LIKE '%" + currentneed + "%' AND PracticesJoined LIKE '%" + category + "%' AND Approved = 'x' AND TypesJoined LIKE '%" + currenttype + "%'";

	} else if (sortby == 'TypesJoined') {
		currenttype = category;
		var listquery = "SELECT Name, Latitude, Longitude, Icon, Description, Location, Website, Image, Provides, Practices, Type FROM " + tableId + " WHERE NeedsJoined LIKE '%" + currentneed + "%' AND PracticesJoined LIKE '%" + currentpractice + "%' AND Approved = 'x' AND TypesJoined LIKE '%" + category + "%'";

	}

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
				var icons = rows[i][3];
				var description = rows[i][4];
				var address = rows[i][5];
				var website = rows[i][6];
				var image = rows[i][7];
				var provides = rows[i][8];
				var practices = rows[i][9];
				var type = rows[i][10];
				var locations = new google.maps.LatLng(rows[i][1], rows[i][2]);
				codeAddress(locations, names, icons, description, address, website, image, provides, practices, type);
				var dataElement = document.createElement('div');
				var nameElement = document.createElement('p');
				nameElement.innerHTML = names;
				nameElement.className = 'name';

				var a = document.createElement('a');
				a.appendChild(nameElement);
				a.title = names;
				a.href = "javascript:void(0)";
				content = '<div style="float:left;width:200px;"><strong>' + names + '</strong><br/><br/><img width="200" src="' + image + '"/></div>';
				a.onclick = (function(locations, content, description, provides, practices, website, address, names, type) {
					return function() {
						map.setCenter(locations);
						map.setZoom(14);
						document.getElementById('in-map-description').innerHTML = "";

						var titleElement = document.createElement('p');
						titleElement.innerHTML = '<div style="float:left;width:70%;"><h2>' + names + '</h2></div><div style="float:right;width:20%;"><strong>' + type + '</strong></div><div style="clear:both;"></div>';
						titleElement.className = 'title';
						document.getElementById('in-map-description').appendChild(titleElement);

						var locElement = document.createElement('p');
						locElement.innerHTML = address + ' - <a href="' + website + '">' + website + '</a>';
						locElement.className = 'location';
						document.getElementById('in-map-description').appendChild(locElement);

						var provElement = document.createElement('p');
						provElement.innerHTML = '<strong>Provides:</strong> ' + provides;
						provElement.className = 'provides';
						document.getElementById('in-map-description').appendChild(provElement);

						var pracElement = document.createElement('p');
						pracElement.innerHTML = '<strong>Practices:</strong> ' + practices;
						pracElement.className = 'practices';
						document.getElementById('in-map-description').appendChild(pracElement);

						/* var descElement = document.createElement('p');
						descElement.innerHTML = description;
						descElement.className = 'description';
						document.getElementById('in-map-description').appendChild(descElement);
						*/
						document.getElementById('in-map-description').style.display = 'inline';
						infoWindow.setPosition(locations);
						infoWindow.setContent(content);
						infoWindow.open(map);
						return false;
					};
				})(locations, content, description, provides, practices, website, address, names, type);

				dataElement.appendChild(a);
				document.getElementById('results').appendChild(dataElement);

			}
			dataElement = "";
		}
	});

	return false;
}

function codeAddress(locations, names, icons, description, address, website, image, provides, practices, type) {
	//Function called to create markers with custom icons and locations
	if (icons) {// ensure not empty
		var iconurl = (BASE_URL + icons);
		content = '<div style="float:left;width:200px;"><strong>' + names + '</strong><br/><br/><img width="200" src="' + image + '"/></div>';
		description = '<p><div style="float:left;"><h2>' + names + '</h2></div><div style="float:right;"><strong>' + type + '</strong></div><div style="clear:both;"></div></p><p>' + address + ' - <a href="' + website + '">' + website + '</a></p>' + '<p><strong>Provides:</strong> ' + provides + '</p><p><strong>Practices:</strong> ' + practices + '</p>';

		createMarker(locations, iconurl, content, description);
	} else {
		content = '<div style="float:left;width:200px;"><strong>' + names + '</strong><br/><br/><img width="200" src="' + image + '"/></div>';
		description = '<p><div style="float:left;"><h2>' + names + '</h2></div><div style="float:right;"><strong>' + type + '</strong></div><div style="clear:both;"></div></p><p>' + address + ' - <a href="' + website + '">' + website + '</a></p>' + '<p><strong>Provides:</strong> ' + provides + '</p><p><strong>Practices:</strong> ' + practices + '</p>';

		createMarker(locations, DEFAULT_ICON_URL, content, description);
	}

	return false;
}

function zoomToAddress(mylat, mylong, zoom, map) {
	//Triggered by zoom function
	map.setZoom(zoom);
	map.setCenter(new google.maps.LatLng(mylat, mylong));
	return false;
};

google.maps.event.addDomListener(window, 'load', initialize);
