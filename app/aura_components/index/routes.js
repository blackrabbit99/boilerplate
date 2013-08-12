define(['bower_components/backbone/backbone'], function(template) {
  	return AppRouter = Backbone.Router.extend({
 			routes: {
				'': 'explore',
				'explore': 'explore',
			},
		 
			initialize: function(attributes) {
				console.log("RRRRRRRRRRRRR");
				Backbone.history.start();	
			},
		 
			explore: function() {
				console.log('explore');
			}
		});
});