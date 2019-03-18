
<?php


$name = $_POST['name'];
$phone = $_POST['phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

$emailAdmin = "sgwebmatriks@gmail.com";


$subject = "Заказ с сайта";

$message = ' 
<html> 
    <head> 
        <title>Заявка от клиента</title> 
        <meta charset="utf-8">
    </head> 
    <body> 
    	<p>Имя: '.$name.'</p>
    	<p>Номер: '.$phone.'</p>

    </body> 
</html>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "От кого:  Лэндинг Народные костюмы <windeco@webmatrix.by>\r\n";

mail($emailAdmin, $subject, $message, $headers);

