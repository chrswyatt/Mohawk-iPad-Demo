// Listen for ALL links at the top level of the document. For
// testing purposes, we're not going to worry about LOCAL vs.
// EXTERNAL links - we'll just demonstrate the feature.
$( document ).on( "click", "a.button", function( event ){
	event.preventDefault();
	location.href = $( event.target ).attr( "href" );
});
$( document ).on( "click", "a.logo", function( event ){
	event.preventDefault();
	location.href = $( event.target ).attr( "rel" );
});

$(document).ready(function(){

	$("select, input").uniform();

	$(".content ul li").click(function(){
		$(this).find('input').attr('checked', true);
		$(this).find('span').addClass('checked');

		$(".content ul li").not(this).find('input').removeAttr('checked');
		$(".content ul li").not(this).find('span').removeClass('checked');
	});

  $("div.selector").click(function(){
    if( $(this).find('span').text() != "Click to drop down" ){
      if ( navigator.userAgent.match(/(iPhone|iPod|iPad)/i) ) {
          $(this).find('span').removeClass('highlight');
      } else {
          $(this).find('span').addClass('highlight');  
      }
    } else {
      if ( navigator.userAgent.match(/(iPhone|iPod|iPad)/i) ) {
          $(this).find('span').addClass('highlight');
      } else {
          $(this).find('span').removeClass('highlight');  
      }
    }
  });

  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
      input.removeClass('highlight');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
      input.removeClass('highlight');
    } else {
      input.addClass('highlight');
    }
  }).blur();

});

var colIndex = 1;

$(function() {
	var body_id = $('body').attr('id');
	if (body_id == 'page_8') {
		$('div.column:not(:first)').hide();
    	setInterval(showColumn, 1000);
  } else if (body_id == 'page_0') {
    $('div.column:not(:first)').hide();
      setInterval(loadHome, 500);
  }
});

function showColumn() {
      colIndex = (colIndex % 5) + 1;
      if (colIndex != 5) {
      	$('#bar' + colIndex).show();
      } else {
      	window.location.replace("page9.html");
      }
}

function loadHome() {
      colIndex = (colIndex % 7) + 1;
      if (colIndex != 7) {
        if ( colIndex == 5) {
          $('div.column:not(:first)').hide();
        } else {
          $('#bar' + colIndex).show();
        }
      } else {
        window.location.replace("page1.html");
      }
}