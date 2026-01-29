<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = strip_tags($_POST["name"]);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $message = strip_tags($_POST["message"]);

  $to = "info@foreing.se";
  $subject = "Nytt meddelande från hemsidan";
  $headers = "From: $name <$email>";

  $body = "Namn: $name\nE-post: $email\n\nMeddelande:\n$message";

  mail($to, $subject, $body, $headers);

  header("Location: tack.html");
  exit;
}
?>
