define(['aura_components/index/routes.js',
		'aura_components/index/views/index.js',
		'aura_components/index/views/venues.js'], function(routes, view, venues) {
	return {
		initialize: function() {
		
			var t = new view({
				el: this.options.el
			});

			
			routes.extend({
				explore: function(){
					console.log("explore");
				}
			});
			new routes;
		}
	};
});