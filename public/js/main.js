$(document).ready(function() {

  $('#about')
    .hide()
    .removeClass('hidden');

  $('#faq').on("click", () => {
    $('#about').slideToggle();
  });

  $('#nav-forward').on("click", () => {
    $('#nav-back').removeClass("hidden");
    let progress = Number($('.progress-bar').attr('aria-valuenow'));
    progress += 25;
    showPage(progress);
  });

    $('#nav-back').on("click", () => {
    let progress = Number($('.progress-bar').attr('aria-valuenow'));
    progress -= 25;
    showPage(progress);
  });

  function showPage(progress) {
    switch (progress) {
      case 25:
        $('.progress-bar span').text(`${progress} Complete`);
        $('.progress-bar').attr('aria-valuenow', progress);
      case 50:
      case 75:
      case 100:
    }
  }
});