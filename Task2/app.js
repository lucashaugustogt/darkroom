$(document).ready(function () {
  $("form").submit(function (event) {

    event.preventDefault();
    
    var formData = {
      login: $("#login").val(),
      email: $("#email").val(),
    };

    $.ajax({
      type: "POST",
      url: "send.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });
  });
});