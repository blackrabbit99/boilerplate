define(['bower_components/backbone/backbone', 'text!./../venues.hbs'], function(backbone, template) {
  	return  Backbone.View.extend({ 
  				initialize: function(){ 
  					
  				},
  				render: function(){
  					this.$el.html(template);
  				}
  			});
});