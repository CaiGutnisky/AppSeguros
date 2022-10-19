<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPropietario = json_decode(file_get_contents("php://input"));
if (!$jsonMascota) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into mascotas(nombre, documento) values (?,?)");
$resultado = $sentencia->execute([$jsonPropietario->nombre, $jsonPropietario->documento]);
echo json_encode([
    "resultado" => $resultado,
]);
