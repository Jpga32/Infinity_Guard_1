<?php
include_once 'conexao.php'; // Inclui o arquivo de conexão

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $novo_nome = $_POST['novo_nome'];
    $novo_email = $_POST['novo_email'];
    $novo_senha = $_POST['novo_senha'];

    // Validação básica
    if (empty($novo_nome) || empty($novo_email) || empty($novo_senha)) {
        echo "<p style='color:red;'>Por favor, preencha todos os campos.</p>";
        echo '<p><a href="adm.php">Voltar ao Painel de Administração</a></p>';
        exit();
    }

    $senha_hash = password_hash($novo_senha, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
        $stmt->execute([$novo_nome, $novo_email, $senha_hash]);

        echo "<p style='color:green;'>Usuário <strong>" . htmlspecialchars($novo_nome) . "</strong> cadastrado com sucesso!</p>";
        echo '<p><a href="adm.php">Voltar ao Painel de Administração</a></p>';

    } catch (PDOException $e) {
        if ($e->getCode() === '23000') {
            echo "<p style='color:red;'>Este email já está cadastrado.</p>";
        } else {
            echo "<p style='color:red;'>Erro ao cadastrar o usuário: " . $e->getMessage() . "</p>";
        }
        echo '<p><a href="adm.php">Voltar ao Painel de Administração</a></p>';
    }
} else {
    echo "<p>Acesso inválido.</p>";
    echo '<p><a href="adm.php">Voltar ao Painel de Administração</a></p>';
}

?>