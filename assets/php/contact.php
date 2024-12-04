<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Carrega o autoloader do Composer
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $assunto = htmlspecialchars($_POST['assunto']);
    $nome = htmlspecialchars($_POST['nome']);
    $fone = htmlspecialchars($_POST['fone']);
    $email = htmlspecialchars($_POST['email']);
    $msg = htmlspecialchars($_POST['msg']);

     // Validação básica
     if (!empty($nome) && !empty($email)) {
        // Cria uma instância do PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Configurações do servidor SMTP
            // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Habilita saída de depuração detalhada
            $mail->isSMTP(); // Envia usando SMTP
            $mail->Host = 'smtp.gmail.email'; // Define o servidor SMTP para envio
            $mail->SMTPAuth = true; // Habilita autenticação SMTP
            $mail->Username = 'ironmakequipamentos@gmail.com'; // Nome de usuário SMTP
            $mail->Password = '1r0nmak2024#'; // Senha SMTP
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Habilita criptografia TLS implícita
            $mail->Port = 465; // Porta TCP para conexão, use 587 se tiver configurado `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            $mail->CharSet = 'UTF-8'; // Define o charset para UTF-8

            // Destinatários
            $mail->setFrom('ironmakequipamentos@gmail.com', 'Mailer');
            $mail->addAddress('de.garcia@ironmak.com.br'); // Adiciona um destinatário
            $mail->addAddress('deivid@ironmak.com.br'); // Adiciona outro destinatário

            // Conteúdo do e-mail
            $mail->isHTML(true); // Define o formato do e-mail para HTML
            $mail->Subject = 'Contato via Site Ironmak Equipamentos';

            $body = "Mensagem enviada através do Site Ironmak, segue informações abaixo:<br>
                    Assunto: $assunto<br>
                    Nome: $nome<br>
                    Telefone: $fone<br>
                    E-mail: $email<br>
                    Mensagem:<br> $msg";

                    $mail->Body = $body;

            // Envia o e-mail
            $mail->send();
            // Redireciona para a página de agradecimento
            header('Location: https://ironmak.com.br/agradecimento.html');
            exit;
        } catch (Exception $e) {
            echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
        }
    } else {
        echo "Por favor, preencha todos os campos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
