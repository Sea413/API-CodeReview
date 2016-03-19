exports.getRepos = function(){
  var apiKey = "1acf7e584b9e702f76c2943985917b8042b78f66";
  var users = $('#users').val();
  $.get('https://api.github.com/users/' + users + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.Length; i++) {

    $('#api-results').append("<li>" + response[i].name + "</li>");
    $('#api-results').append("<li>" + response[i].description + "</li>");
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
