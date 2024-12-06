<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0); 
}

include 'connect.php'; 


if (isset($_GET['id'])) {
    $id = $_GET['id'];

    
    $sql = "DELETE FROM productos WHERE id = :id";
    $stmt = $pdo->prepare($sql);

    
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

   
    if ($stmt->execute()) {
       
        echo json_encode(['message' => 'Producto eliminado con éxito']);
    } else {
        
        echo json_encode(['error' => 'No se pudo eliminar el producto']);
    }
} else {
    
    echo json_encode(['error' => 'ID de producto no proporcionado']);
}
?>
