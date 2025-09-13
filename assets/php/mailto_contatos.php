<?php

// mostrar erro
ini_set('display_errors', 1);
error_reporting(E_ALL);

$destinatario = "professorjurandir@dicap.com.br";

//Variáveis
$vnome = $_POST['nome'];
$vemail = $_POST['email'];
$vtel = $_POST['tel'];
$vtitulo = $_POST['titulo'];
$vmensagem = $_POST['mensagem'];

// mensagem escrita
$body = "
<html>
  <p><b>Nome: </b>$vnome</p>
  <p><b>E-mail: </b>$vemail</p>
  <p><b>Tel: </b>$vtel</p>
  <p><b>Titulo do email: </b>$vtitulo</p>
  <p><b>Mensagem: </b>$vmensagem</p> 
</html>";

// cabeçalhos adicionais
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $vemail\r\n";

// envia o email
if (mail($destinatario, $vtitulo, $body, $headers)) {
  echo "<meta http-equiv='refresh' content='1;URL=../../informacoes_enviadas_com_sucesso.html'>";
} else {
  echo "<meta http-equiv='refresh' content='1;URL=../../erro_form.html'>";
}
?>



