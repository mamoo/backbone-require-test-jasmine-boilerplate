// Filename: models/VCard.js
define([
  'underscore',
  'backbone'
], function (_, Backbone) {
    var vCardView = Backbone.View.extend({
    	tagName: "li"
    	,render: function() {
    		this.$el.html('test');
  		}
    });
    // You usually don't return a model instantiated
    return vCardView;
});