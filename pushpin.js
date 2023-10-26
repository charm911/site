M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
  /* Pushpin Initialization */
  /* This way works! */
  $('.pushpin').each(function () {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });

});