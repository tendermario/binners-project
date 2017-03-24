$(document).ready(function() {

  $('#about')
    .hide()
    .removeClass('hidden');

  $('#faq').on("click", () => {
    $('#about').slideToggle();

    $('#nav-back')
    .hide()
    .removeClass('hidden');
  });

  $('#nav-forward').on("click", () => {
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
    $('.progress-bar span').text(`${progress} Complete`);
    $('.progress-bar').attr('aria-valuenow', progress);
    $('.progress-bar').attr('style', `width: ${progress}%`);
    switch (progress) {
      case 25:
        $('#nav-back').hide();
        $('.about-img').attr('src', "http://binnerpickup.org/images/about-1.png");
        break;
      case 50:
        $('#nav-back').show();
        $('.about-img').attr('src', "http://binnerpickup.org/images/about-2.png");
        break;
      case 75:
        $('.about-img').attr('src', "http://binnerpickup.org/images/about-3.png");
        break;
      case 100:
        $('.about-img').attr('src', "http://binnerpickup.org/images/about-4.png");
        break;
      case 125:
        $('#about').slideToggle(() => {
          showPage(25);
        });
        break;
    }
  }
});