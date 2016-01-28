var app = app || {};
var active = active || {};

app.Model = Backbone.Model.extend({
});

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  url: '/api',
  initialize: function() {
    var self = this;
    this.on('change', function() {
      var view = new app.CollectionView({
        collection: self
      });
      console.log('Collection modified.');
    });
    this.on('sync', function() {
      var view = new app.CollectionView({
        collection: self
      });
      console.log('Collection synced.');
    });
    this.fetch();
  }
});

Backbone.Model.idAttribute = "_id";

$(document).ready(function(){
  active.collection = new app.Collection();
  active.createSurveyView = new app.postSurveyView({
    collection: active.collection
  });
});
