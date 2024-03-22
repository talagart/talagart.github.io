document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza (czyli przekierowaniu)
    
    // Pobierz dane z formularza
    var formData = new FormData(this);

    // Ustaw adres URL interfejsu API Gateway
    var apiUrl = 'https://tgsvt1e7vl.execute-api.us-east-1.amazonaws.com/prod/formularz';

    // Wyślij żądanie POST do interfejsu API Gateway
    fetch(apiUrl, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Jeśli żądanie zostało zakończone sukcesem, wyczyść formularz i wyświetl komunikat sukcesu
        var sendmessage = document.getElementById('sendmessage');
        var errormessage = document.getElementById('errormessage');
        if (sendmessage) sendmessage.classList.add('show');
        if (errormessage) errormessage.classList.remove('show');
        document.getElementById('contactForm').reset(); // Wyczyść formularz
      } else {
        // Jeśli wystąpił błąd, wyświetl komunikat o błędzie
        var errormessage = document.getElementById('errormessage');
        if (errormessage) {
          errormessage.textContent = 'Oops! Something went wrong. Please try again later.';
          errormessage.classList.add('show');
        }
      }
    })
    .catch(error => {
      // W przypadku błędu sieciowego, wyświetl komunikat o błędzie
      var errormessage = document.getElementById('errormessage');
      if (errormessage) {
        errormessage.textContent = 'Oops! Something went wrong. Please check your network connection and try again.';
        errormessage.classList.add('show');
      }
    });
  });
});
