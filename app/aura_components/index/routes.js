define(['aura_components/index/views/index.js'], function(view) {
  	return AppRouter = Backbone.Router.extend({
 			routes: {
				'': 'explore',
				'explore': 'explore',
			},
		 
			initialize: function(attributes) {
				console.log(this);
				new view;
				Backbone.history.start();	
			},
		 
			explore: function() {
				console.log('explore');
			}
		});
});