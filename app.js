$(document).ready(function() {



  $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {
    for (let i = 0; i < data.length; i++) {
      let newimg = $('<p></p>');
      newimg.text(data[i].title)

      console.log(data[i].title)
    }
  })









});
