var UserModel = Backbone.Model.extend({
	urlRoot: 'http://tiyfe.herokuapp.com/collections/troy-profile',
	defaults: {
		idAtrribute: '_id',
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	}
});