define(['aura_components/index/routes.js'], function(routes) {
  return {
	initialize: function() {
		var routesK = new routes({
			auraInstanse: this
		});
	}
  };
});