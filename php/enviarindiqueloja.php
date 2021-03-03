<?php
//VariÃ¡veis

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$dtnasc = $_POST['data'];
$opcoes = $_POST['escolhas'];
$cep =$_POST['cep'];
$outrosinteresses =$_POST['outrosinteresses'];
if(isset($_POST['supermercado'])){
	$supermercado = ' ativo';
}
if(isset($_POST['sapataria'])){
	$sapataria = ' ativo';
}
if(isset($_POST['farmacia'])){
	$farmacia = ' ativo';
}
if(isset($_POST['papelaria'])){
	$papelaria = ' ativo';
}
if(isset($_POST['cosmeticos'])){
	$cosmeticos = ' ativo';
}
if(isset($_POST['construcao'])){
	$construcao = ' ativo';
}
if(isset($_POST['construcao'])){
	$construcao = ' ativo';
}
if(isset($_POST['salao'])){
	$salao = ' ativo';
}
if(isset($_POST['automoveis'])){
	$automoveis = ' ativo';
}
if(isset($_POST['alimentacao'])){
	$alimentacao = ' ativo';
}
if(isset($_POST['joias'])){
	$joias = ' ativo';
}
	

$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');
// Compo E-mail
  $arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdane;
  font-size:12px;
  color: #666666;
  }
  a{
  color: #666666;
  text-decoration: none;
  }
  a:hover {
  color: #FF0000;
  text-decoration: none;
  }
  </style>
    <html>
        <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#CCCCCC'>
            <tr>
				<td>
					<tr>
					 <td width='500'>Nome de quem indicou:$nome</td>
					</tr>
					<tr>
					  <td width='320'>E-mail da empresa:<b>$email</b></td>
					</tr>
					<tr>
					  <td width='320'>Telefone da empresa:<b>$telefone</b></td>
					</tr>				
					<tr>
					  <td width='320'>Cidade da empresa:$cep</td>
					</tr>
					<tr>
					  <td width='320' style='text-align:center'>Categorias em que a empresa se enguadra</td>
					</tr>
					<tr>
					  <td width='320'>Supermercado:$supermercado</td>
					</tr>
					<tr>
					  <td width='320'>Sapataria:$sapataria</td>
					</tr>
					<tr>
					  <td width='320'>Farmácia:$farmacia</td>
					</tr>
					<tr>
					  <td width='320'>Papelaria:$papelaria</td>
					</tr>
					<tr>
					  <td width='320'>Cosméticos:$cosmeticos</td>
					</tr>
					<tr>
					  <td width='320'>Materiais de construção:$construcao</td>
					</tr>
					<tr>
					  <td width='320'>Salão de beleza:$salao</td>
					</tr>
					<tr>
					  <td width='320'>Automóveis:$automoveis</td>
					</tr>
					<tr>
					  <td width='320'>Alimentação:$alimentacao</td>
					</tr>
					<tr>
					  <td width='320'>Joalherias:$joias</td>
					</tr>
					<tr>
					  <td width='320'>Informações adicionais:$outrosinteresses</td>
					</tr>
				</td>
			</tr>           
        </table>
    </html>
  ";

//enviar
  
  // emails para quem serÃ¡ enviado o formulÃ¡rio
  $emailenviar = "ezequiasmoreira@hotmail.com";
  $destino = $emailenviar;
  $assunto = "Indicação de empresa ";

  // é necessário indicar que o formato do e-mail em  html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'From: $nome <$email>';
  //$headers .= "Bcc: $EmailPadrao\r\n";
  
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
  $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link serÃ¡ enviado para o e-mail fornecido no formulÃ¡rio";
  echo " <meta http-equiv='refresh' content='10;URL=../indiqueloja.html'>";
  } else {
  $mgm = "ERRO AO ENVIAR E-MAIL!";
  echo "";
  }
?>