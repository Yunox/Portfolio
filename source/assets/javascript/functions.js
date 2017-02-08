$(function() {
    console.log( "ready!" );
    $('body').removeClass('no-js');

    $('#nav-toggle').click(function(){
    	$(this).toggleClass('active');
      $('.main-nav').toggleClass('main-nav--active');
    });

    $('img.svg').each(function(){
      var $img = $(this),
      imgID = $img.attr('id'),
      imgClass = $img.attr('class'),
      imgURL = $img.attr('src');

      $.get(imgURL, function(data) {

        var $svg = $(data).find('svg');

        if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        $img.replaceWith($svg);
});

});

});
