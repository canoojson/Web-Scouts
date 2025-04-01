<?php
// Ruta de la carpeta que contiene las imágenes
$directory = 'img/';

// Leer los archivos en la carpeta
$images = array_diff(scandir($directory), array('..', '.')); // Elimina los directorios '.' y '..'

// Filtrar solo los archivos de imagen (puedes agregar más extensiones si es necesario)
$imageFiles = array_filter($images, function($file) {
    return preg_match('/\.(jpg|jpeg|png|gif)$/i', $file); // Filtra archivos de imagen
});

// Devuelve los archivos como un JSON
echo json_encode(array_values($imageFiles));
?>
