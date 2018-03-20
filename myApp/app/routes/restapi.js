import Route from "@ember/routing/route";
import $ from 'jquery';

export default  Route.extend({
  model: function() {
    console.log("model() @ routes/commits/index.js");
    //var url = 'https://api.github.com/repos/emberjs/ember.js/commits';
    
    var url = 'https://api.github.com/repos/bhaskeryadav/EmberBegins/commits';
    return $.getJSON(url);
  }
});