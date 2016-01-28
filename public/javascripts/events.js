var app = app || {};
var active = active || {};

app.postSurveyView = Backbone.View.extend({
  el: $('#post-survey-sect'),
  initialize: function() {
    this.$el.children('button').hide();
  },
  //onclick trigger events runs postSurvey and validation functions--- backbone
  events: {
    'click button': 'postSurvey',
    'blur input': 'validateInput'
  },
  //send survey data
  postSurvey: function() {
    //sets confirmation message to ensure user is ready
    var confirmation = confirm('Ready to save?');
    if (confirmation) {
      //data object intaking the input values
      var data = {
        name: $('#name').val(),
        gender: $('#gender').val(),
        software: $('#software').val(),
        other: $('#other').val(),
        loveFeats: $('#loveFeats').val(),
        wishFeats: $('#wishFeats').val()
      }
      //clear class grab
      var clear  = $('.reset');
      this.collection.create(data);
      //clear in action
      clear.val('');
    }
  },
  validateInput: function() {
    //grabs all inputs
    var allInputs = this.$el.children('input');
    var validVals = 0;
    //checks the input values when activated
    for (var i = 0; i < allInputs.length; i++) {
      var selector = $(allInputs)[i];
      //console.log(selector);
      var val = $(selector).val();
      if (val.length > 0) {
        validVals++;
      }
    }
    console.log(validVals);


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
    console.log('CollectionView launched.')
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
