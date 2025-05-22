<?php
session_start(); // Inicia a sessão
// Verifica se o usuário está logado (pelo nome agora)
if (!isset($_SESSION['user_nome'])) {
    header("Location: index.php");
    exit();
}

$usuario_logado_nome = $_SESSION['user_nome']; // Recupera o nome da sessão
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel de Administração</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 900px;
            margin-top: 30px;
        }

        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }

        h2 {
            color: #555;
            margin-top: 25px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }

        .dashboard-item, .cadastro-form {
            background-color: #e9e9e9;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
        }

        .dashboard-item a {
            text-decoration: none;
            color: #337ab7;
        }

        .logout-button {
            margin-top: 30px;
        }

        .logout-button a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #d9534f;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }

        .logout-button a:hover {
            background-color: #c9302c;
        }

        .user-info {
            text-align: center;
            margin-bottom: 20px;
            color: #777;
        }

        .cadastro-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        .cadastro-form input[type="email"],
        .cadastro-form input[type="password"],
        .cadastro-form input[type="text"],
        .cadastro-form button {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .cadastro-form button {
            background-color: #5cb85c;
            color: white;
            border: none;
            cursor: pointer;
        }

        .cadastro-form button:hover {
            background-color: #4cae4c;
        }

        .cadastro-container {
            margin-top: 20px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 5px;
            border: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Painel de Administração</h1>

        <div class="user-info">
            <p>Bem-vindo(a), **<?php echo htmlspecialchars($usuario_logado_nome); ?>**!</p>
        </div>

        <h2>Gerenciamento de Conteúdo</h2>
        <div class="dashboard-item">
            <span>Gerenciar Posts do Blog</span>
            <a href="#">Ir para Posts</a>
        </div>
        <div class="dashboard-item">
            <span>Gerenciar Páginas</span>
            <a href="#">Ir para Páginas</a>
        </div>
        <div class="dashboard-item">
            <span>Gerenciar Produtos</span>
            <a href="#">Ir para Produtos</a>
        </div>

        <h2>Gerenciamento de Usuários</h2>
        <div class="dashboard-item">
            <span>Listar Usuários</span>
            <a href="#">Ver Usuários</a>
        </div>
        <div class="cadastro-container">
            <h3>Cadastrar Novo Usuário</h3>
            <form action="cadastrar_usuario.php" method="post" class="cadastro-form">
                <label for="novo_nome">Nome:</label>
                <input type="text" id="novo_nome" name="novo_nome" required>

                <label for="novo_email">Email:</label>
                <input type="email" id="novo_email" name="novo_email" required>

                <label for="novo_senha">Senha:</label>
                <input type="password" id="novo_senha" name="novo_senha" required>

                <button type="submit">Cadastrar Usuário</button>
            </form>
        </div>

        <h2>Configurações do Site</h2>
        <div class="dashboard-item">
            <span>Configurações Gerais</span>
            <a href="#">Acessar Configurações</a>
        </div>

        <div class="logout-button">
            <a href="logout.php">Sair</a>
        </div>
    </div>
</body>
</html>