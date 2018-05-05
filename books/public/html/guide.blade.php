<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>首页</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" media="screen and (max-device-width: 768px)" href="css/tinyScreen.css" />  <!--屏幕小于400px时 加载tinyScreen。css-->
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 768px) and (max-device-width: 992px)" href="css/smallScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 992px) and (max-device-width: 1200px)" href="css/middleScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-device-width: 1200px)"href="css/bigScreen.css" />
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
<div class="mianNav-wrap">
    <div class="mainConBox main-navBox ">
        <!--大屏状态下-->
        <nav class="navbar  hidden-xs" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand " href="#"  >首页</a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">查找图书</a></li>
                    <li><a href="#">最新上架</a></li>
                    <li><a href="#">会员中心</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">需求登记</a></li>
                    <li><a href="#">购物车</a></li>
                    <li><a href="#">充值(余额)</a></li>
                    <li><a href="javascript:void(0)">退出</a></li>
                </ul>
            </div>
        </nav>
        <!--小屏状态下-->
        <nav class="navbar visible-xs navbar-xs" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <div class="right-button">
                        <button type="button"  class=" btn-menu  navbar-toggle" data-toggle="collapse"
                                data-target="#example-navbar-collapse">
                            <span class="menu-right"></span>
                        </button>
                    </div>
                    <a class="navbar-brand" href="#" >首页</a>
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">查找图书</a></li>
                        <li><a href="#">最新上架</a></li>
                        <li><a href="#">会员中心</a></li>
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">需求登记</a></li>
                        <li><a href="#">购物车</a></li>
                        <li><a href="#">充值(余额)</a></li>
                        <li><a href="#">退出</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
<div class=" mainConBox">
    <div class="margin-header visible-xs"></div>
    <div class="searchBoxwrap searchBox  searchBox-xs" id="search-scroll">
        <form class="navbar-form " role="search">
            <div class="form-group">
                <input type="text" class="form-control search-input" placeholder="请输入关键字">
            </div>
            <button type="submit" class="btn btn-green hidden-xs" ><span class="search-icon"></span>搜索</button>
            <button type="submit" class="btn visible-xs" ><span class="search-icon"></span></button>
        </form>
        <div class="hot-search">
            <p>搜索：</p>
            <div class="search-label">
                <label class="checkbox-inline">
                    <input type="radio" name="optionsRadiosinline"  value="option1" checked><span>全部字段</span>
                </label>
                <label class="checkbox-inline">
                    <input type="radio" name="optionsRadiosinline"  value="option2"><span>书名</span>
                </label>
                <label class="checkbox-inline">
                    <input type="radio" name="optionsRadiosinline"  value="option1"><span>作者</span>
                </label>
                <label class="checkbox-inline">
                    <input type="radio" name="optionsRadiosinline"  value="option2"><span class="english-top">ISBN</span>
                </label>
                <label class="checkbox-inline">
                    <input type="radio" name="optionsRadiosinline"  value="option2"><span class="english-top">ASIN</span>
                </label>
            </div>
        </div>
    </div>
    <div class="lines-box visible-xs"></div>
    <div class="newsBox import-news col-padding-no marginlr-xs">
        <div class="panel  panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">重要通知</h3>
            </div>
            <ul class="list-group" id="zy-news-list">
            </ul>
        </div>
    </div>
    <div class="lines-box visible-xs"></div>
    <div class="containerBox col-padding-no">
        <div class="row">
            <div class="col-xs-12 col-sm-5 col-md-4 no-padding-r ">
                <div class="panel panel-default marginlr-xs">
                    <div class="panel-heading">热门搜索主题</div>
                    <div class="">
                        <div class="item">
                            <ul class="list-group">
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                                <li><a href="#">Arts and Photography  <span class="little-word">256789</span> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class=" navToggle-title-noxs ">
                        <a href="/011-changyongzhuti.html" class="list-l">按名称排序</a>
                        <a href="/011-changyongzhuti.html" class="list-l">按大小排序</a>
                        <a href="/011-changyongzhuti.html" class="list-l">按人气排序</a>
                    </div>
                </div>
            </div>
            <div class="lines-box visible-xs"></div>
            <div class="col-xs-12 col-sm-7 col-md-8 ">
                <div class="panel panel-default fixheight marginlr-xs" style="height:482px;">
                    <div class="panel-heading ">新闻和消息</div>
                    <div class="panel-body  panel-body-xs">
                        <p ><strong>• 2017-04-30</strong>  具体内容 具体内容 具体内容 具体内容 具体内容 具体内容 具体内容 具体内容 具体内容 具体内容 具体内容 具体内容</p>
                        <p ><strong>• 2017-04-30</strong>  新用户教程：<a href="#" class="main-color">如何使用amazon.com礼品卡充值的说明。</a></p>
                        <p ><strong>• 2017-04-30</strong>  <a href="#" class="main-color">需求登记</a> 功能已经更新，如果本站没有的书籍，可以通过需求登记告诉我们。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footerBox mainConBox">
    <p>已登录账号:<span >12345ffg@gmail.com</span></p>
</div>
<div class="backTop-box">
    <div class="backToTop"></div>
</div>
<script>
    //消息通知 定时加载
    $(document).ready(function () {
        setInterval("startRequest()",10000);
    });
    function startRequest(){
        $.ajax({
            url: "/index.php/Home/MemberInfor/getMyInfor",
            type: "GET",
            async : false, //同步请求
            dataType:"json",
            success: function (data){
                if (data!="") {   //判断data的object不为空
                    var html="";
//                    var data = JSON.parse( data );
                    $(data).each(function(index,r){
                        html +=' <li class="list-group-item"><a href="'+r['id']+'"><p class="news-con">'+r['title']+'</p></a><span onclick="deleteMes('+r['id']+')" inforid="'+r['id']+'">忽略</span> </li> ';
                    });
                    $("#zy-news-list").html(html);
                }else{
                    $(".import-news").stop().hide();
                };
            }
        })
    }
    function deleteMes(id) {
        /*通知*/
            $.ajax({
                url: "/index.php/Home/MemberInfor/delInfor",
                type: "GET",
                async : false, //同步请求
                dataType:"json",
                data : {"id":id},
                success: function (data){
                    if(data.status == 'ok'){
                        $(".list-group-item").eq(id-1).stop().hide();
                    }
                }
            })
    }
    clearInterval(startRequest);
</script>
</body>
</html>