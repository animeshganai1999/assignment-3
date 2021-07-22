<?php

$con=mysqli_connect("localhost","root","","students");
if(isset($_REQUEST["name"])){
$reg="^".$_REQUEST["name"];

$query="select name from info where name regexp '$reg'";
$res=mysqli_query($con,$query);
$out=mysqli_fetch_all($res);
echo json_encode($out);
}

if(isset($_REQUEST["ip"])){

    $text=$_REQUEST["ip"];
    
    $query="select * from info where name='$text'";
    $res=mysqli_query($con,$query);
    $out=mysqli_fetch_all($res, MYSQLI_ASSOC);
    echo json_encode($out);
    
    }
?>