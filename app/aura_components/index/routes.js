define([''], function(view) {
	return	Backbone.Router.extend({
 			routes: {
				'explore': 'explore',
			},
		 
			initialize: function(attributes) {
				Backbone.history.start();	
			}
		});
});