/**
 * Created by Administrator on 2017/5/30.
 */
$(function () {
    if ((screen.width <=767) ) {
        $(".searchBox").addClass("searchBox-xs");
        $(".searchBox").removeClass("searchBoxwrap");
        $(".newsBox").addClass("import-news-xs");
        $(".picList-box2 .pageBox").removeClass("pull-right");
    }else{
        $(".searchBox").removeClass("searchBox-xs");
        $(".searchBox").addClass("searchBoxwrap");
        $(".newsBox").removeClass("import-news-xs");
        $(".picList-box2 .pageBox").addClass("pull-right");
    };
})
$(function () {
    $(".navToggle-title .list-l").click(function () {
        $num = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".navToggle-con .item").eq($num).stop().show().siblings().stop().hide();
    })
    //点击全选或全部选
    $('input[name="checkAll"]').click(function(){
        //alert(this.checked);
        if($(this).is(':checked')){
            $('input[name="stuCheckBox"]').each(function(){
                //此处如果用attr，会出现第三次失效的情况
                $(this).prop("checked",true);
            });
        }else{
            $('input[name="stuCheckBox"]').each(function(){
                $(this).removeAttr("checked",false);
            });
            //$(this).removeAttr("checked");
        }
    });
})
/*查看更多*/
$(function () {
    $(".cp-intro .click-add").click(function () {
        if( !$(".cp-intro .summary").is(":hidden")){
            $(".cp-intro .detail").stop().slideDown();
           $(".cp-intro .summary").stop().slideUp();
            $(".cp-intro .click-add").html("简略查看");
        }else {
            $(".cp-intro .detail").stop().slideUp();
            $(".cp-intro .summary").stop().slideDown();
            $(".cp-intro .click-add").html("查看更多");
        }
    })
})

$(function () {
    /*超小屏*/
    if ((screen.width <=767) ) {
        /*搜索滚动*/
        $(window).scroll(function () {
            var headerTop = $(".navbar-xs").height();
            var searchTop = $("#search-scroll").height();
            if($(window).scrollTop() > headerTop+searchTop ){
                $("#search-scroll").addClass("searchBox2-xs-fixed");
            }else {
                $("#search-scroll").removeClass("searchBox2-xs-fixed");
            }
        })
        /*首页 新闻和消息页面高度*/
        $(".containerBox .fixheight").css("height","auto");

        /*会员中心 侧边栏*/
        $(".menu-sub-icon").click(function () {
            $(".slidenavBox .subnav-left").stop().toggle();
        })
    }
    /*sm <800*/
    if ((screen.width <=991 && screen.width>=768 ) ) {
        $(".detail-main-box .spcs-hide ").stop().show();
        $(".detail-main-box .spcs-show ").stop().hide();
    }
})

$(function () {
    //侧边栏切换
    for(var j = 0; j<$(".subnavToggle-title .type .list-l").length; j++){
        $(".subnavToggle-title .type .list-l")[j].num=j;
    }
    $(".subnavToggle-title .type .list-l").click(function () {
        // console.log(this.num);
        $(this).addClass("cur").parents(".type").siblings().find(".list-l").removeClass("cur");
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents(".type").find(".title").addClass("cur");
        $(this).parents(".type").siblings().find(".title").removeClass("cur");
        $(".subnavToggle-con .item").eq(this.num).stop().show().siblings().hide();
    })
})


//返回顶部
$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() > 100){
            $(".backTop-box").fadeIn(1000);
        }else {
            $(".backTop-box").fadeOut(1000);
        }
    });
    $(".backTop-box").click(function () {
        var speed = 200;
        $("body,html").animate({
                scrollTop:0
            },
            speed
        );
    })
})




