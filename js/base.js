$(function(){
	wow = new WOW(
        {
            boxClass: 'wow',      // 默认属性名
            animateClass: 'animated', // 默认触发的动画类(包含在animate css中)
            offset: 0,          // 为所有添加wow的元素设置 data-wow-delay属性 的默认值
            mobile: true,       // 是否在移动设备中开启动画
            live: true        // 持续监测页面中是否插入新的wow元素
        }
    );
    wow.init();
    $(window).scroll(function(){
        if ($(window).scrollTop()>200){
            $(".return-top").fadeIn(800);
        }
        else{
            $(".return-top").fadeOut(800);
        }
    });
     $(".return-top").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
//  链接跳转
//	$(".nav-menu ul li").hover(function(){
//		$(this).addClass("nav-active").siblings().removeClass("nav-active")
//	});
//	$(".nav-menu").mouseleave(function(){
//		$(".nav-menu ul li").eq(0).addClass("nav-active").siblings().removeClass("nav-active");
//	});
    $(".menubtn").click(function(){
    	$(".nav-menu").show();
    	$(".nav-box").css({"background":"rgba(0,0,0,0.3)","height":"100%"})
    });
    $(".submenu").click(function(){
    	$(".nav-menu").hide();
    	$(".nav-box").css({"background":"#fff","height":""})
    });
    $(".product-list span").click(function(){
    	$(this).addClass("pro-index").siblings().removeClass("pro-index")
    	var index = $(".product-list span").index(this);
    	$(".item-list-two ul").eq(index).addClass("show").siblings().removeClass("show");
    	$(".news-inforlist-box").eq(index).addClass("show").siblings().removeClass("show");
    });
//  表单验证
 function formValidation(){
    var contact_man = $('input[name="contact-man"]').val();
    var contact_mes = $('input[name="contact-mes"]').val();
    var title = $('input[name="title"]').val();
    var advisory = $('#advisory').val();

    var result = {}

    if(contact_man==''){
//  	alert(122);
        result.code = 1;
        result.message = '请填写联系人';
        return result;
    }
    if(contact_mes==''){
        result.code = 2;
        result.message = '请填写联系信息';
        return result;
    }
    if(title==''){
        result.code = 3;
        result.message = '请填写标题';
        return result;
    }
    if(advisory==''){
        result.code = 4;
        result.message = '请填写咨询内容';
        return result;
    }
    result.code = 0,
    result.message = '恭喜您，已成功提交！';
    return result;

  }
 function showFormTips(text){
    $('#formTipText').html(text);
    $('.form-tips').fadeIn();

    setTimeout(function(){
        $('.form-tips').fadeOut();
    },2000)
}
  $('.submit').click(function(){
        var result = formValidation();
        showFormTips(result.message);
    });
})
