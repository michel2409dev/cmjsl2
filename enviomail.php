<?php
$nombre=$_POST["str_nombre"];
$apellido=$_POST["str_apellido"];
$email=$_POST["str_email"];
$comentario=$_POST["str_comentario"];
$nombrecompleto=$nombre."  ".$apellido;


$cuerpomsg =  "Nombre: " .$nombrecompleto. "<br>Correo: " . $email ."" ."<br>Mensaje :" .$comentario;


$correoDe= "webcmjformulario@gmail.com";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../cmjsl2/correo/Exception.php';
require '../cmjsl2/correo/PHPMailer.php';
require '../cmjsl2/correo/SMTP.php';


// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'webcmjformulario@gmail.com';                     // SMTP username
    $mail->Password   = 'WebCmj2020$%';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($correoDe, $nombrecompleto);
    $mail->addAddress('info@cmjsl.com', 'Administración');     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
   // $mail->addBCC('2410gami@gmail.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Solicitud de información';
    $mail->Body    = $cuerpomsg;

    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo '  <script>

                   
                //window.alert("el mensaje se envio con esxito");
                

                window.history.go(-1);
                
                //alert("hola");
                //evaluar(1);
                //var ventana="";
                //ventana=window.document.getElementById("div_mensaje");
                //ventana.style.display="inline-block";
                //window.history.go(-1);

            </script>';
} catch (Exception $e) {
    echo "Hubo un error en el envio del formulario: {$mail->ErrorInfo}";
}




?>

