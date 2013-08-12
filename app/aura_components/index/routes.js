define([''], function(view) {
	return	Backbone.Router.extend({
 			routes: {
				'explore': 'explore',
			},
		 
			initialize: function(attributes) {
				console.log("routes start");
				Backbone.history.start();	
			}
		});
});