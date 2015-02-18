var LoadingView=Backbone.View.extend({
	el: '#loading-view',
	initialize: function(options){
		setTimeout(function(options){
			window.location.href = '#play';
			}, 2000);
		}

});