<?php
  require __DIR__ . '/vendor/autoload.php';
  date_default_timezone_set('Europe/Paris');

  if(isset($_POST['contactName'], $_POST['contactEmail'], $_POST['contactMessage'])) {

    $name = filter_var($_POST['contactName'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['contactEmail'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['contactMessage'], FILTER_SANITIZE_STRING);

    if(!empty($name) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $mail = new PHPMailer;
      $mail->CharSet = 'UTF-8';
      $mail->setFrom($email, $name);
      $mail->addAddress('hello@joelmercier.io', 'Joel Mercier');
      $mail->addReplyTo($email, $name);
      $mail->Subject = 'Nouveau message de la part de '.$name.' depuis le portfolio';
      $mail->msgHTML($message);

      if($mail->send()) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Merci ! Votre email a été envoyé";
        exit;
      }
      else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Erreur serveur. Votre message n'a pas pu être envoyé";
        exit;
      }
    } else {
      http_response_code(400);
      echo 'Une ou plusieurs valeur sont vides ou bien l\'email n\'est pas correct. Veuillez réessayer';
      exit;
    }
  } else {
    http_response_code(500);
    echo 'Une ou plusieurs valeur n\'ont pas été transmises au serveur. Veuillez réessayer';
    exit;
  }
?>
