$(document).ready(function() {

// Switch hidden class with jQuery's hide

$("#amount")
      .hide()
      .removeClass('hidden');

  // Event Listeners

  // make the 100+ toggle the estimate field
  $("#amount-small").on("click", () => {
    $("#amount").slideUp(300);
  });
  $("#amount-medium").on("click", () => {
    $("#amount").slideUp(300);
  });
  $("#amount-large").on("click", () => {
    $("#amount").slideDown(300, () => {
      $("#amount-input").focus();
    });
  });

});