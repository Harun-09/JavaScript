<?php
$result ="";
if(isset($_POST["username"])){
    $name= $_POST["username"];
    if(strlen($name) < 4 || strlen($name) > 8){
        $result ="User name must be between 4 to 8 digit";
  }elseif(strpos($name,"@") === false){

     $result ="User name must be include @ sign";
  }else{
    $result ="User login successfull";
  }

}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question_01</title>
</head>
<body>
    <h2>Login Register</h2>
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
        <input type="text" name="username">
        <input type="submit" value="Submit">
    </form>
    <p style="color: green"><?php echo $result; ?></p>
</body>
</html>