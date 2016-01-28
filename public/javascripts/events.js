var app = app || {};
var active = active || {};

app.postSurveyView = Backbone.View.extend({
  el: $('#post-survey-sect'),
  initialize: function() {
    this.$el.children('button').hide();
  },
  events: {
    'click button': 'postSurvey',
    'blur input': 'validateInput'
  },
  postSurvey: function() {
    var confirmation = confirm('Ready to save?');
    if (confirmation) {
      var data = {
        name: $('#name').val(),
        gender: $('#gender').val(),
        software: $('#software').val(),
        other: $('#other').val(),
        loveFeats: $('#loveFeats').val(),
        wishFeats: $('#wishFeats').val()
      }
      var clear  = $('.reset');
      this.collection.create(data);
      clear.val('');
    }
  },
  validateInput: function() {
    var allInputs = this.$el.children('input');
    console.log(allInputs);
    var validVals = 0;

    for (var i = 0; i < allInputs.length; i++) {
      var selector = $(allInputs)[i];
      //console.log(selector);
      var val = $(selector).val();
      if (val.length > 0) {
        validVals++;
      }
    }

    if (validVals != allInputs.length) {
      this.$el.children('button').hide();
      this.$el.children('.error').html('Please fill out all fields.');
    } else {
      this.$el.children('button').show();
      this.$el.children('.error').html('');
    }
  }
});

app.CollectionView = Backbone.View.extend({
  initialize: function() {
  },
  render: function() {
    console.log('CollectionView is rendering.');
    // we expect our CollectionView to be bound to a Collection
    var models = this.collection.models;
    for (var m in models) {
      new app.ModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});
