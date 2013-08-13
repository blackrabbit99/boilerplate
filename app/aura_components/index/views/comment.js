define(['bower_components/backbone/backbone', 'text!./../comment.hbs'], function(backbone, template) {
  	return  Backbone.View.extend({ 
  				initialize: function(){ 
  					this.$el.html(template);
  				},
  				render: function(container){
  					container.html(this.$el);
  				}
  			});
});