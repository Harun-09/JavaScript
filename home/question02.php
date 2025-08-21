<?php
$filetype =[
    "image.jpg",
   "image.png",
   " image.gif",
   "application.msword",
   "application.doc"   
];
$error = "";
$success = ""; 
$uploaded_file = "";
if(isset($_FILES["file"])){
    $file = $_FILES["file"];

    if($file['error'] == 0){
        if(in_array($file['type'], $filetype) == false){
            $error ="Your file must be an image, text or pdf";

        }elseif($file['size'] > 400 * 1024){
       $error ="Couldn't upload more than 400 kb";

        }else{
            move_uploaded_file($file['temp_name'], $uploaded_file);
            $uploaded_file = "upload/".$file['name'];
            
            $success = "File upload successfull";
        }

    }

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question_02</title>
</head>
<body>
    <h2>File upload</h2>
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
        <input type="file" name="file">
        <input type="submit" value="Upload">
    </form>
    <p style="color: red"><?php echo $error; ?></p>
    <p style="color: green"><?php echo $success ; ?></p>
    <?php 
    if($uploaded_file != 0){
        echo "<iframe src='$uploaded_file' frameborder='0' height = '500' width = '500'></iframe>" ;

    }
    
    ?>
</body>
</html>