define(['aura_components/index/routes.js',
		'aura_components/index/views/index.js',
		'aura_components/index/views/venues.js',
		'aura_components/index/views/comment.js'], function(routes, view, venues, comment) {
	return {
		initialize: function() {
		
			var indexView = new view({tagName: "div"});
			var self = this;
			indexView.render(this.$el);

			console.log(routes.prototype);

			routes.prototype.explore = function(){
				indexView.remove();
				new venues({tagName: "div"}).render(self.$el);
			};

			routes.prototype.comment = function(){
				indexView.remove();
				new comment({tagName: "div"}).render(self.$el);
			};
				

			new routes();
		}
	};
});