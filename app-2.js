$(document).ready(function() {

  let submitbtn = $('#button3')
  submitbtn.click(function() {
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {
      for (let i = 0; i < data.length; i++) {
        let p = $('<p></p>')
        p.text(data[i].title)
        $('.results').append(p)
        console.log(data[i])
      }
    })
  })









});
