define(['text!./index.hbs', 'bower_components/backbone/backbone'], function(template) {
  return {
    initialize: function() {
    	this.html(template);
    }
  };
});