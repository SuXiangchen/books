<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>引导页</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" media="screen and (max-device-width: 768px)" href="css/tinyScreen.css" />  <!--屏幕小于400px时 加载tinyScreen。css-->
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 768px) and (max-device-width: 992px)" href="css/smallScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 992px) and (max-device-width: 1200px)" href="css/middleScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-device-width: 1200px)" href="css/bigScreen.css" />
</head>
<style>
    html,body{height:100%;}
    body { width: 100%;overflow: hidden ;margin:0;}
    .yd-bg{position:relative;margin:0 auto;overflow:hidden;z-index:1;height: 100%;}
    .homepage_bg{width:100%;height:auto;display:block; z-index:1;}
</style>
<body class="yingdaobody">
<div >
    <a href="javascript:void(0)" class="yingdao-login-btn">
        <button type="button" class="btn-primary btn-lg ">登录 / 注册</button>
    </a>
</div>
</body>
<body>
    <div class="yd-bg visible-xs">
        <div class="homepage">
            <div><img class="homepage_bg" src="images/yingdao-bg-sj.jpg" /></div>
        </div>
        <a href="javascript:void(0)" class="yingdao-login-btn">
        <button type="button" class="btn-primary btn-lg ">登录 / 注册</button>
        </a>
    </div>
</body>
</html>