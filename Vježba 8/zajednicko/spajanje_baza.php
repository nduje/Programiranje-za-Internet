<?php
$mysqli = new mysqli("localhost", "NikolicD", "PZI_NikolicD1", "NikolicD");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>