$(document).ready(function() {

  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  $.ajaxPrefilter(function(options, originalOptions, jqXHR){
    jqXHR.setRequestHeader('X-CSRF-Token', csrfToken);
  });
  
  $('#generateKeyBtn').click(function() {

    // We probably want to replace this with a proper gif spinner at some point
    $( "#result" ).html( 'Loading ...' );

    // Key the private key from the server
    $.post('api/keypair', function( data ) {
        console.log(data);
        $( "#result" ).html( data.privateKey );
    });
  });

});
