/*!
* Simple Simsimi api implementation
*  - Jan Romeo B. Manaloto
*  - get your simsimi API key from developer.simsimi.com
*/   
 
 var apiUrl = "http://domain.com/api.php" // link to your REST api
 var apiKey = "" // api key from simsimi
 
 $("#submit").click(function() {
   $(".chat").append("<li class='list-group-item disabled'>"+$('#msg').val()+"</li>");
      $("#submit").text("Loading...");
      $("#msg").prop('disabled', true);
      var msg = $('#msg').val();
      $.ajax({
          url: apiUrl,
          data: {
          api: apiKey,
          text: encodeURIComponent(msg.trim())
        },
        type: 'GET',
        crossDomain: true,
        jsonp: false,
        contentType: 'json',
        success: function(data) {
          $(".chat").preppend("<li class='list-group-item'>"+data.response+"</li>");
          $("button").text("Go");
          $("input").prop('disabled', false);
          $("input").val('');
        },
        error: function(httpReq, status, exception) {
          alert(status + " " + exception);
        }
      });
    });