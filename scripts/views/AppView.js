var AppView = Backbone.View.extend({
	
	el: '#app',
	initialize: function() {

		this.loadingView = new LoadingView({
			
		});

		this.playView = new PlayView({
			
		});

		this.leaderboardView = new LeaderboardView({
			
		});


		this.settingsView = new SettingsView({
			
		});

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'loading':      'loading', 
				'play': 		'play',
				'leaderboard': 	'leaderboard',
				'settings': 	'settings',
				'': 			'loading'
			},

			loading: function(){
				console.log('loading')
				self.hideAllPages();
				self.loadingView.$el.show();
			},

			play: function(){
				console.log('play')
				self.hideAllPages();
				self.playView.$el.show();
			},

			leaderboard: function(){
				console.log('leaderboard')
				self.hideAllPages();
				self.leaderboardView.$el.show();
			},

			settings: function(){
				console.log('settings')
				self.hideAllPages();
				self.settingsView.$el.show();
			},

		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}
});


// $(this).parents("p").css("text-decoration", "line-through");