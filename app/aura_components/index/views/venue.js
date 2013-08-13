define(['bower_components/backbone/backbone', 
	'text!./../venue.hbs'
	], function(backbone, template, collection) {
  	return  Backbone.View.extend({ 
  				initialize: function(){ 
  					this.$el.html(template);
  					//new collection;
  				},
  				render: function(container){
  					container.html(this.$el);
  				}
  			});
});