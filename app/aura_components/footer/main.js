define(['text!./footer.hbs', 'bower_components/backbone/backbone'], function(template) {
  return {
    initialize: function() {
    	this.html(template);
    }
  };
});