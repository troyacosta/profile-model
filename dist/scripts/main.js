var user = new UserModel();
var App = Backbone.Router.extend({
    routes: {
        '': 'profile',
        'edit': 'edit'
    },
    profile: function() {
        $('.page').hide();
        $('#profile').show();
    },
    edit: function() {
        $('.page').hide();
        $('#edit').show();
    }
});

var app = new App();
Backbone.history.start();
user.fetch();

$('#name').val(user.get('name'));
$('#inputEmail3').val(user.get('email'));
$('#role').val(user.get('role'));

$('form').submit(function(e) {
    e.preventDefault();
    user.set({
        name: $('#name').val(),
        email: $('#inputEmail3').val(),
        role: $('#role').val()
    });
    user.save();

});

user.on('change', function() {
    $('.profile-usertitle-job').html(user.get('role'));
    $('.profile-usertitle-name').html(user.get('name'));
    $('.dropdown-toggle').html(user.get('name'));
});
