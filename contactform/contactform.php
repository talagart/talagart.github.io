<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Adres e-mail odbiorcy
  $to = "rtalaga92@gmail.com";

  $subject = "Nowa wiadomość od $name";

  $body = "Otrzymałeś nową wiadomość od $name.\n\n";
  $body .= "Adres e-mail nadawcy: $email\n\n";
  $body .= "Treść wiadomości:\n$message";

  // Wyślij wiadomość e-mail
  if (mail($to, $subject, $body)) {
    echo "OK";
  } else {
    echo "Oops! Coś poszło nie tak. Spróbuj ponownie później.";
  }
} else {
  echo "Oops! Coś poszło nie tak. Spróbuj ponownie później.";
}
?>
