<?php

//print highlight_string(file_get_contents('test.c'));

include_once 'geshi/geshi.php';
$source = file_get_contents('test.cpp');
$language = 'cpp';
$geshi = new GeSHi($source, $language);
echo '<span style="color:#100;font-family:monospace;">'.$geshi->parse_code().'</span>';

?>

