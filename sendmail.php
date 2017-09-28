<?php

require 'Mail/PHPMailerAutoload.php';

$mail = new PHPMailer;


//$email="sdfasdfa@a.com,asdf@aasdf.com";
if( isset($_POST['email']) ){

	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) {

		//var_dump(filter_var ( $email, FILTER_SANITIZE_EMAIL));

		$mail->isSMTP();                                      // Set mailer to use SMTP
		//$mail->SMTPDebug = 2;
		$mail->Host = 'ssl://smtp.gmail.com';  								// Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'larruibo@gmail.com';                 // SMTP username
		$mail->Password = 'uniandes967';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;                                    // TCP port to connect to

		$mail->setFrom('geappsdesarrollo@gmail.com', 'Contacto Página La Hacienda');
		$mail->addAddress('larruibo@hotmail.com', 'Mario lega');     // Add a recipient mlega@gappstudio.com
		//$mail->addAddress('ellen@example.com');               // Name is optional
		$mail->addReplyTo('geappsdesarrollo@gmail.com', 'Information');
		$mail->addCC('larruibo@gmail.com');
		//$mail->addBCC('bcc@example.com');

		//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		//http://www.google.com/accounts/DisplayUnlockCaptcha
		$mail->isHTML(true);                                  // Set email format to HTML

		$nombre = filter_var ($_POST['name'],FILTER_SANITIZE_STRING);
		$email = filter_var ($_POST['email'],FILTER_SANITIZE_STRING);
		$telefono = filter_var ($_POST['telephone'],FILTER_SANITIZE_STRING);
		$tipo = filter_var ($_POST['type'],FILTER_SANITIZE_STRING);
		$fecha = filter_var ($_POST['date'],FILTER_SANITIZE_STRING);
		$descripcion = filter_var ($_POST['description'],FILTER_SANITIZE_STRING);
		$mail->Subject = 'Nuevo correo desde la página web de la hacienda';
		$mail->Body    = 'Se han recibido los siguientes datos de contacto: <br>';
		$mail->Body .= 'Nombre: '.$nombre.' <br>';
		$mail->Body .= 'E-mail: '.$email.' <br>';
		$mail->Body .= 'Teléfono: '.$telefono.' <br>';
		$mail->Body .= 'Tipo de evento: '.$tipo.' <br>';
		$mail->Body .= 'Fecha: '.$fecha.' <br>';
		$mail->Body .= 'Descripción: '.$descripcion.' <br>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
		$send=$mail->send();
		if(!$send) {
      ?>
      <script>
        alert('Un error ha ocurrido, intenta nuevamente');
      </script>
      <?php
		} else {
      ?>
      <script>
        alert('El mensaje ha sido enviado correctamente');
      </script>
      <?php
		}


} else {

?>
<script>
	alert('El correo: <?php echo filter_var ($_POST['email'],FILTER_SANITIZE_STRING) ." no es un correo valido";?>')
</script>
<?php
}


}
?>
