$(".ser").click(function(){
    $("html,body").animate({
        scrollTop: $('#about1').offset().top
    }, 1000);
});
$(".ser2").click(function(){
    $("html,body").animate({
        scrollTop: $('#services').offset().top
    }, 1000);
});
$(".ser3").click(function(){
    $("html,body").animate({
        scrollTop: $('#home').offset().top
    }, 1000);
});
window.onscroll = function () {
    if(window.pageYOffset>=368){
        $(".my-nav").css("color","#252a34");
    };
};