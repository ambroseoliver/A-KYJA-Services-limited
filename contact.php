<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If using Composer
// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit();
  }

  $mail = new PHPMailer(true);

  try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'akejaserviceslimited@gmail.com'; // Your email
    $mail->Password = 'wnamyarvagyxzwjv '; // Your email password (Use App Password for Gmail)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email Settings
    $mail->setFrom($email, $name);
    $mail->addAddress('akejaserviceslimited@gmail.com'); // Change to recipient email
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission";
    $mail->Body = "<strong>Name:</strong> $name <br> 
                       <strong>Email:</strong> $email <br> 
                       <strong>Message:</strong><br> $message";

    if ($mail->send()) {
      echo "Message sent successfully!";
    } else {
      echo "Message could not be sent.";
    }
  } catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  }
} else {
  echo "Invalid request";
}
