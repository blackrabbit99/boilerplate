define(['bower_components/backbone/backbone', 
	'text!./../venues.hbs',
	'./../collection/venues.js',
	], function(backbone, template, collection) {
  	return  Backbone.View.extend({ 
  				initialize: function(){ 
  					this.$el.html(template);
  					new collection;
  				},
  				render: function(container){
  					container.html(this.$el);
  				}
  			});
});