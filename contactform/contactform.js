document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza (czyli przekierowaniu)
    
    // Pobierz dane z formularza
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // Ustaw adres URL interfejsu API Gateway
    var apiUrl = 'https://tgsvt1e7vl.execute-api.us-east-1.amazonaws.com/prod/formularz';

    // Wyślij żądanie POST do interfejsu API Gateway
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(formData), // Przekształć dane na format JSON
      headers: {
        'Content-Type': 'application/json' // Ustaw typ zawartości
      }
    })
    .then(response => {
      if (response.ok) {
        // Jeśli żądanie zostało zakończone sukcesem, wyczyść formularz i wyświetl komunikat sukcesu
        document.getElementById('sendmessage').classList.add('show');
        document.getElementById('errormessage').classList.remove('show');
        document.getElementById('contactForm').reset(); // Wyczyść formularz
      } else {
        // Jeśli wystąpił błąd, wyświetl komunikat o błędzie
        document.getElementById('sendmessage').classList.remove('show');
        document.getElementById('errormessage').classList.add('show').textContent = 'Oops! Something went wrong. Please try again later.';
      }
    })
    .catch(error => {
      // W przypadku błędu sieciowego, wyświetl komunikat o błędzie
      document.getElementById('sendmessage').classList.remove('show');
      document.getElementById('errormessage').classList.add('show').textContent = 'Oops! Something went wrong. Please check your network connection and try again.';
    });
  });
});
