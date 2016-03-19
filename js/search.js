exports.getRepos = function(){
  var apiKey = "1acf7e584b9e702f76c2943985917b8042b78f66";
  var users = $('#users').val();
  $.get('https://api.github.com/users/' + users + '/repos?access_token=' + apiKey).then(function(response){
    var json = response;
    console.log(json);
    $('#api-results').append("<li>" +json[0].name + "</li>");
    $('#api-results').append("<li>" +json[0].clone_url + "</li>");
    $('#api-results').append("<li>" +json[1].name + "</li>");
    $('#api-results').append("<li>" +json[1].clone_url + "</li>");
    $('#api-results').append("<li>" +json[2].name + "</li>");
    $('#api-results').append("<li>" +json[2].clone_url + "</li>");
    $('#api-results').append("<li>" +json[3].name + "</li>");
    $('#api-results').append("<li>" +json[3].clone_url + "</li>");
    $('#api-results').append("<li>" +json[4].name + "</li>");
    $('#api-results').append("<li>" +json[4].clone_url + "</li>");
    $('#api-results').append("<li>" +json[5].name + "</li>");
    $('#api-results').append("<li>" +json[5].clone_url + "</li>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
