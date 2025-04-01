<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos enviados desde el formulario
    $name = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $mail = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['telefono']) ? $_POST['telefono'] : '';
    $message = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

    if (empty($name) || empty($mail) || empty($phone) || empty($message)) {
        echo "Error: Faltan datos en el formulario.";
    } else {
        // Configura los encabezados del correo
        $header = 'From: ' . $mail . " \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        // Prepara el contenido del mensaje
        $messageContent = "Este mensaje fue enviado por: " . $name . " \r\n";
        $messageContent .= "Su e-mail es: " . $mail . " \r\n";
        $messageContent .= "Teléfono de contacto: " . $phone . " \r\n";
        $messageContent .= "Mensaje: " . $message . " \r\n";
        $messageContent .= "Enviado el: " . date('d/m/Y', time());

        $para = 'Sergio.Cano.Pomer.2004@gmail.com';  // Tu dirección de correo
        $asunto = 'Mensaje de contacto desde la web';  // Asunto del correo

        // Intenta enviar el correo
        if (mail($para, $asunto, utf8_decode($messageContent), $header)) {
            header("Location: http://localhost:5500/index.html?status=success");
        exit();
        
        } else {
            header("Location: http://localhost:5500/index.html?status=error");
        exit();
        }
    }
} else {
    echo "No se recibieron datos.";
}
?>