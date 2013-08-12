define(['bower_components/backbone/backbone', 'text!./../index.hbs'], function(backbone, template) {
  	return  Backbone.View.extend({ 
  				initialize: function(){ 
  					this.$el.html(template);
  				},
  				render: function(){
  					
  				}
  			});
});