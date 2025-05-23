<?php

session_start();
include_once 'conexao.php'; // Inclui o arquivo de conexão

// === Processa o login, só se veio via POST ===
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $stmt = $pdo->prepare("SELECT id, nome, email, senha FROM usuarios WHERE email = ?"); // Seleciona o nome também
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($senha, $user['senha'])) {
        $_SESSION['user_id'] = $user['id']; // Opcional: armazenar o ID do usuário
        $_SESSION['user_email'] = $user['email']; // Mantemos o email, se precisar
        $_SESSION['user_nome'] = $user['nome'];   // Armazenamos o nome na sessão
        header("Location: adm.php");
        exit();
    } else {
        $erro_login = true;
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <div class="page">
        <form method="POST" action="" class="formLogin">
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>

            <?php if (isset($erro_login) && $erro_login): ?>
                <p style='color:red;'>Email ou senha incorretos.</p>
            <?php endif; ?>

            <label for="email">E-mail</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                autofocus
                required
            />

            <label for="password">Senha</label>
            <input
                type="password"
                name="senha"
                id="password"
                placeholder="Digite sua senha"
                required
            />

            <input type="submit" value="Acessar" class="btn" />

            <p class="forget">Esqueceu sua senha? <a href="#">Clique aqui</a></p>
            
        </form>

         <a href="index.html">  <button class="btn"> Voltar Para Home</button></a>
        
    </div>

</body>
</html>