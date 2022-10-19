<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id"])) {
    exit("No hay id de propetario");
}
$id = $_GET["id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id, nombre, documento, edad from EmpresaSeguros where id = ?");
$sentencia->execute([$id]);
$propietarios = $sentencia->fetchObject();
echo json_encode($propietarios);
