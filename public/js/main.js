$(document).ready(function() {

  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  $.ajaxPrefilter(function(options, originalOptions, jqXHR){
    jqXHR.setRequestHeader('X-CSRF-Token', csrfToken);
  });
  
  $('#generateKeyBtn').click(function() {
    $.post('api/keypair', function( data ) {
        console.log(data);
        $( ".result" ).html( data );
    });
  });

});
