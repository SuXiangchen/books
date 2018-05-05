<?php

$getData = $_POST?$_POST:$_GET;
$username = $getData['username'];
$password = $getData['password'];

$userArr = array(
    'username' => '123456',
    'password' => '123456',
);
$return = array("status"=>'no',"msg"=>'');
if($username == $userArr['username']){
    if($password == $userArr['password']){
        $return['status'] = 'ok';
    }else{
        $return['msg'] = '密码错误';
    }
    echo json_encode($return);
    exit;
}else{
    $return['msg'] = '用户名不存在';
    echo json_encode($return);
}



?>