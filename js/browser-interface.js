var getRepos = require('./../js/search.js').getRepos;

$(document).ready(function() {
  $('#search-button').click(function() {
    getRepos();

  });
});
