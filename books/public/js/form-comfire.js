/**
 * Created by admin on 2017/6/5.
 */
//表单验证
$(function () {

    //为表单的必填文本框添加提示信息（选择form中的所有后代input元素）

     okMsg1=false;
     okMsg2=false;
     okMsg3=false;
     okMsg4=false;
     okMsg5=false;
     okMsg6=false;
     okMsg7=false;
     okMsg8=false;
     okMsg9=false;
     okMsg10=false;

    //为表单的必填文本框添加相关事件（blur、focus、keyup）
    $("form :input").blur(function(){
        //注意：这里的this是DOM对象，$(this)才是jQuery对象
        var $parent = $(this).parent();  //得到文本框外面的副、父元素col-sm-8 col-xs-7
        var $parents = $parent.parents(".form-group-box")   //得到每组表单组的最大父元素
        var $helpmessbox = $parents.find(".form-warn"); //得到当前的提示信息
        var $helpmess = $parents.find(".help-block");
        //删除之前的错误提醒信息
        $parent.find(".help-block").remove();
        //验证“名称”
        if($(this).is("#username")){
            //运用jQuery中的$.trim()方法，去掉首位空格
            if($.trim(this.value) == "" || $.trim(this.value).length < 6){
                var errorMsg = " 请输入至少6位的名称！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }else if($.trim(this.value) !=""){
                var username = $("#username").val();
                var returnStr = false;
                $.ajax({
                    type: "POST",
                    url:  "/js/form-login.php",
                    async : false, //同步请求
                    data:{username:username},
                    dataType:"json",
                    success: function(data) {
                        if (data.state == "no") {
                            var errorMsg = "账户已存在！";
                            $helpmessbox.stop().show();
                            $helpmess.html(errorMsg);
                        } else if(data.state == 'ok'){
                            $helpmessbox.stop().hide();
                            returnStr = true;
                            okMsg1= true;
                        }
                    }
                });
                return returnStr;
            }
        }
        //验证邮箱
        if($(this).is("#email")){
            if($.trim(this.value) == ""){
                var errorMsg = "请输入正确的E-Mail地址！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }
            else{
                $helpmessbox.stop().hide();
                 okMsg2= true;
            }
        }
        //验证密码
        if($(this).is("#password")){
            //运用jQuery中的$.trim()方法，去掉首位空格
            if($.trim(this.value) == ""){
                var errorMsg = " 请输入6到20位由大小写英文、数字或符号组成的字符！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }
            else{
                $helpmessbox.stop().hide();
                 okMsg3= true;
            }

            //验证密码强度
            var regular = /^([^\`\+\~\!\#\$\%\^\&\*\(\)\|\}\{\=\"\'\！\￥\……\（\）\——]*[\+\~\!\#\$\%\^\&\*\(\)\|\}\{\=\"\'\`\！\?\:\<\>\•\“\”\；\‘\‘\〈\ 〉\￥\……\（\）\——\｛\｝\【\】\\\/\;\：\？\《\》\。\，\、\[\]\,]+.*)$/;  //特殊符号
            if(  $.trim(this.value).length > 5 &&  $.trim(this.value).length < 21 && /^\d+$/.test($.trim(this.value))){
                $("#psdqd").find(".s").addClass("red").siblings().removeClass("red");
            } else
            if ($.trim(this.value).length > 5 &&  $.trim(this.value).length < 21  && /[A-z]/.test($.trim(this.value))){
                $("#psdqd").find(".m").addClass("red").siblings().removeClass("red");
            }
            if ($.trim(this.value).length > 5 &&  $.trim(this.value).length < 21  && regular.test($.trim(this.value))){
                $("#psdqd").find(".l").addClass("red").siblings().removeClass("red");
            }
        }
        //确认密码
        if($(this).is("#passwordcomfire")){
            if($.trim(this.value) == ""){
                var errorMsg = "确认密码不能为空！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }
            else{
                $helpmessbox.stop().hide();
                 okMsg4= true;
            }
        }
        //验证qq 微信
        if($(this).is("#weixin")){
            var qq=document.getElementById("qq").value;
            if($.trim(this.value)=="" && qq == ""){
                var errorMsg = "QQ和微信至少选填一项！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }
            else{
                $helpmessbox.stop().hide();
                 okMsg5= true;
            }
        }
        //验证邀请码
        if($(this).is("#yqm")){
            if($.trim(this.value)=="" ){
                var errorMsg = "邀请码不能为空！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }
            else{
                $helpmessbox.stop().hide();
                 okMsg6= true;
            }
        }
        //验证验证码
        if($(this).is("#yzm")){
            if($.trim(this.value)=="" ){
                var errorMsg = "验证码不能为空！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }
            else{
                $helpmessbox.stop().hide();
                 okMsg7= true;
            }
        }
        //验证已登录的密码
        if($(this).is("#passwordlogin")){
            //运用jQuery中的$.trim()方法，去掉首位空格
            if($.trim(this.value) == "" ){
                var errorMsg = " 密码不能为空！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }else if($.trim(this.value) !=""){
                var passwordlogin = $("#passwordlogin").val();
                var returnStr = false;
                $.ajax({
                    type: "POST",
                    url:  "/js/form-login.php",
                    async : false, //同步请求
                    data:{passwordlogin:passwordlogin},
                    dataType:"json",
                    success: function(data) {
                        if (data.state == "no") {
                            console.log(data.state);
                            var errorMsg = "密码错误！";
                            $helpmessbox.stop().show();
                            $helpmess.html(errorMsg);
                        } else if(data.state == 'ok'){
                            $helpmessbox.stop().hide();
                            returnStr = true;
                            okMsg8= true;
                        }
                    }
                });
                return returnStr;
            }
        }
        //验证金额
        if($(this).is("#money")){
            if($.trim(this.value)=="" ){
                var errorMsg = "金额不能为空！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }else if($.trim(this.value)!="" &&  !/^\d+$/.test($.trim(this.value)) ){
                var errorMsg = "金额必须为数字！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }else{
                $helpmessbox.stop().hide();
                okMsg9= true;
            }
        }
        //验证收款账号
        if($(this).is("#skzh")){
            if($.trim(this.value)=="" ){
                var errorMsg = "金额不能为空！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }else if($.trim(this.value)!="" &&  !/^\d+$/.test($.trim(this.value)) ){
                var errorMsg = "金额必须为数字！";
                $helpmessbox.stop().show();
                $helpmess.html(errorMsg);
            }else{
                $helpmessbox.stop().hide();
                okMsg10= true;
            }
        }

    }).keyup(function(){
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
//            $(this).triggerHandler("blur");
    }).focus(function(){
//            $(this).triggerHandler("blur");  //弹出提示信息
    });

});
function checkSubmitRegis(){
        // return true;
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var passwordcomfire = $("#passwordcomfire").val();
        var qq = $("#qq").val();
        var weixin = $("#weixin").val();
        var yqm = $("#yqm").val();
        var yzm = $("#yzm").val();
        var returnStr = false;
        $.ajax({
            type: "POST",
            url:  "/js/checkUserInfo.php",
            async : false, //同步请求
            data:{username:username,email:email,password:password,passwordcomfire:passwordcomfire,qq:qq,weixin:weixin,yqm:yqm,yzm:yzm},
            dataType:"json",
            success: function(data) {
                if (data.status == "no") {
                    $("#error").stop().show();
                    $("#result-mess").html(data.msg);
//                    alert(data.msg);
                } else if(data.status == 'ok'){
                    returnStr = true;
                    // okMsg7 = true;
                }
            }
        });
        return returnStr;
        // alert("输入正确")
}
function checkSubmitjb() {
    if( okMsg5 && okMsg8 ) {
        return true;
        // alert("输入正确")
    }else{
        $('#error').stop().show();
        $("#result-mess").html("信息错误，请根据提示重新填写！")
        return false;
    }
}
function checkSubmitmm() {
    if( okMsg3 && okMsg4 && okMsg8 ) {
        return true;
        // alert("输入正确")
    }else{
        $('#error').stop().show();
        $("#result-mess").html("信息错误，请根据提示重新填写！")
        return false;
    }
}
function checkSubmitemail() {
    if( okMsg2  && okMsg8 ) {
        return true;
        // alert("输入正确")
    }else{
        $('#error').stop().show();
        $("#result-mess").html("信息错误，请根据提示重新填写！")
        return false;
    }
}
function checkSubmitmoney() {
    if( okMsg5 && okMsg9 && okMsg10 ) {
        return true;
        // alert("输入正确")
    }else{
        $('#error').stop().show();
        $("#result-mess").html("信息错误，请根据提示重新填写！")
        return false;
    }
}

function hideError() {
    $("#error").stop().hide();
}



