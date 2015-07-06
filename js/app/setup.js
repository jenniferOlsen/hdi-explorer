app.ApplicationModel = Backbone.Model.extend({
  // Country codes
  defaults: {
    code: ''
  }
});

app.CountryInformation = Backbone.Model.extend({
  defaults: {
    code: '',
    name: ''
  },
  url: '',
  baseurl: 'http://data.undp.org/resource/y8j2-3vi9.json',
  urltpl: _.template('<%= baseurl %>?Abbreviation=<% code %>')
});