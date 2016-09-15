$(document).ready(function() {

  // Add the CSRf validation to avoid XSS attacks
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  $.ajaxPrefilter(function(options, originalOptions, jqXHR){
    jqXHR.setRequestHeader('X-CSRF-Token', csrfToken);
  });
  
  $('#generateKeyBtn').click(function() {

    // TODO: Replace this with a proper gif spinner
    $( "#result" ).html( 'Loading ...' );

    // Key the private key from the server
    $.post('api/keypair', function(data) {
      $('#result').html(
        '<div><b>Id (Use this to encrypt things with the public key on the server):</b><br>' +
        data.id +
        '</div><b>Private Key:</b><br>' +
        data.privateKey +
        '</div>'
      );
    });
  });

  $('#encryptBtn').click(function() {

    // TODO: Replace this with a proper gif spinner
    $('#encryptionResult').html( 'Loading ...' );

    var postData = {
      id: $('#publicKeyId').val(),
      thingToEncrypt: $('#thingToEncrypt').val()
    };

    // Key the private key from the server
    $.post('api/encrypt', postData, function(data) {
      console.log(data);
      $('#encryptionResult').html(data);
    });
  });
});
