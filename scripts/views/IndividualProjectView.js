var SettingsView = Backbone.View.extend({
	el: 'settings-button',
	initialize: function(){
		_.bindAll(
			this,
			'onAddButtonClick'
		

		);
		
	 this.$descriptionBox = $('#description');
	 this.$addButton = $('#add-button');
	 this.$addButton.on('click', this.onAddButtonClick);

	},
	onAddButtonClick: function(){
	$('#list').append("<br>"+this.$descriptionBox.val());
	// $('#list').append("<br>" +this.$descriptionBox.val());
	$('<input type="checkbox" value="1" id="check-box"/>').appendTo('#list');
	// $(this).parents("#list").css("text-decoration", "line-through");
	 $("#list").parents(type="checkbox").css("text-decoration", "line-through");
	}
	


});


// $(this).parents("p").css("text-decoration", "line-through");