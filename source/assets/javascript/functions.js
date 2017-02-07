$(function() {
    console.log( "ready!" );
    $('body').removeClass('no-js');

    $('#nav-toggle').click(function(){
    	$(this).toggleClass('active');
      $('.main-nav').toggleClass('main-nav--active');
    });

});
