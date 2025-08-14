$(document).ready(function(){
    $(".faq_p3").hide();
    $(".faq_p1").click(function(){
        // $(".faq_p3").hide();
        $(this).parents("li").find(".faq_p3").slideToggle();
    })

}) //end
