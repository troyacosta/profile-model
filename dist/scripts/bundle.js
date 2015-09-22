(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var user = new UserModel();
var App = Backbone.Router.extend({
    routes: {
        '': 'profile',
        'edit': 'edit'
    },
    profile: function profile() {
        $('.page').hide();
        $('#profile').show();
    },
    edit: function edit() {
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

$('form').submit(function (e) {
    e.preventDefault();
    user.set({
        name: $('#name').val(),
        email: $('#inputEmail3').val(),
        role: $('#role').val()
    });
    user.save();
});

user.on('change', function () {
    $('.profile-usertitle-job').html(user.get('role'));
    $('.profile-usertitle-name').html(user.get('name'));
    $('.dropdown-toggle').html(user.get('name'));
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map