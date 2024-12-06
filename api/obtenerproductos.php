<?php
header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type"); 

include 'connect.php';  

try {
    
    $sql = "SELECT * FROM productos";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    
    if ($stmt->rowCount() > 0) {
        
        $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

        
        foreach ($productos as &$producto) {
            $producto['imagen'] = 'http://localhost/aa/vitaecomerce/public/img/' . $producto['imagen']; 
        }

       
        echo json_encode($productos);
    } else {
        
        echo json_encode(["mensaje" => "No se encontraron productos"]);
    }

} catch (PDOException $e) {
    
    echo json_encode(["error" => "Error en la base de datos: " . $e->getMessage()]);
}
?>
