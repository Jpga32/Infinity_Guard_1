<?php
$pdo = new PDO("mysql:host=localhost;dbname=login_db;charset=utf8mb4", 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Dados do usuário
$email = 'user@teste.com';
$senha = password_hash('123456', PASSWORD_DEFAULT); // Criptografa a senha

$stmt = $pdo->prepare("INSERT INTO usuarios (email, senha) VALUES (?, ?)");
$stmt->execute([$email, $senha]);

echo "Usuário criado com sucesso!";
