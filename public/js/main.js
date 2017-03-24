$(document).ready(function() {

  $('#about')
    .hide()
    .removeClass('hidden');

  $('#faq').on("click", () => {
    $('#about').slideToggle();
  })

});