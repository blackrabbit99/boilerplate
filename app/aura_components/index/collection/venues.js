define(['bower_components/backbone.api.foursquare/backbone.api.foursquare'], function(backboneApi) {   

			var  venues = new Backbone.API.Foursquare.Collections.Venues();

			venues.fetch({
				success: function(response){
					console.log(response);
				}
			});

});