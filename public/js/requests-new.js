$(document).ready( function() {

// Switch hidden class with jQuery's hide
// Hide is used for jquery slide

$("#amount")
      .hide()
      .removeClass('hidden');

  // Event Listeners

  // make the 100+ toggle additional estimate field
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

    // input the values from the form into the confirmation modal
    $("#submit").on("click", () => {
      let address = $("#address").val();
      let date = $("#date").val();
      let time = $("#time").val();
      let amount = $("#amount-input").val();
      let glass = $("#glass").val();
      let note = $("#note").val();
      let recurring = $("#recurring").val();
      $(".address-confirm").text(`Address: ${address}`);
      $(".date-confirm").text(`Date: ${date}`);
      $(".time-confirm").text(`Time: ${time}`);
      $(".amount-confirm").text(`Amount: ${amount}`);
      $(".glass-confirm").text(`Glass: ${glass}`);
      $(".note-confirm").text(`Note: ${note}`);
      $(".recurring-confirm").text(`Recurring: ${recurring}`);
    });
});