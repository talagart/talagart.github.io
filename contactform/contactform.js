$(document).ready(function() {
  $('.contactForm').submit(function(e) {
    e.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza (czyli przekierowaniu)

    var form = $(this);
    var formData = form.serialize(); // Pobierz dane z formularza

    // Wykonaj żądanie AJAX
    $.ajax({
      type: 'POST',
      url: 'C:\Users\l\Documents\GitHub\talagart.github.io\contactform\contactform.php', // Adres URL, do którego wysyłamy dane formularza
      data: formData, // Dane formularza
      success: function(response) {
        if (response == 'OK') {
          $('#sendmessage').addClass('show');
          $('#errormessage').removeClass('show');
          $('.contactForm').find('input, textarea').val('');
        } else {
          $('#sendmessage').removeClass('show');
          $('#errormessage').addClass('show').html(response);
        }
      }
    });
  });
});
