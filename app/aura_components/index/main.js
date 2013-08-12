define(['text!./index.hbs', 'aura_components/index/routes.js'], function(template, routes) {
  return {
	initialize: function() {
		this.html(template);
		var routesK = new routes();
	}
  };
});