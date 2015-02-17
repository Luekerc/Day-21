var AppView = Backbone.View.extend({
	el: '#menu-screen',
	initialize: function() {
		
		this.projects = new ProjectsCollection();
		console.log(ProjectsCollection);

		this.leaderboardView = new LeaderboardView({
			projects: this.projects
		});
		this.playView = new PlayView({
			projects: this.projects
		});
		this.settingView = new SettingsView({
			projects: this.projects
		});

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'home': 		'home',
				'leaderboard': 	'leaderboard',
				'play': 		'play',
				'settings': 	'settings'
			},

			home: function() {
				console.log('home');
				self.hideAllPages();
				self.homeView.$el.show();
			},

			resume: function() {
				self.hideAllPages();
				self.leaderboardView.$el.show();
			},

			projects: function() {
				self.hideAllPages();
				self.playView.$el.show();
			},

			admin: function() {
				self.hideAllPages();
				self.settingsView.$el.show();
			}
		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.menu-screen').hide();
	}
});


// $(this).parents("p").css("text-decoration", "line-through");