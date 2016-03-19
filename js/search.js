exports.getRepos = function(){
  var apiKey = require('./../.env').apiKey;
  var users = $('#users').val();
  $.get('https://api.github.com/users/' + users + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response.length);
    for(var i = 0; i < response.length; i++) {
    $('#api-results').append("<li>" + response[i].name + "</li>");
    $('#api-results').append("<li>" + response[i].description + "</li>");
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
