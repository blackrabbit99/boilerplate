define([''], function(view) {
	return	Backbone.Router.extend({
 			routes: {
				'explore': 'explore',
				'comment': 'comment',
			},
		 
			initialize: function(attributes) {
				console.log("routes start");
				Backbone.history.start();	
			}
		});
});