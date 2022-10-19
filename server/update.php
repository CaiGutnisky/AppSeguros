<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPropietario = json_decode(file_get_contents("php://input"));
if (!$jsonPropietario) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE EmpresaSeguros SET nombre = ?, documento = ? WHERE id = ?");
$resultado = $sentencia->execute([$jsonPropietario->nombre, $jsonPropietario->raza, $jsonMascota->id]);
echo json_encode($resultado);
