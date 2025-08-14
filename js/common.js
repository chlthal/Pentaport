$(function(){

    $(".d_header_moblie_2depth").hide();
    $(".d_h2").click(function(){ 
        $(".d_header_moblie_2depth").hide();
       $(this).parents("li").children().find("ul").show();
    })

    $(".d_h_mobile_more").click(function(){

        $(".d_btn1").toggleClass("d_btn11");
        $(".d_btn2").toggleClass("d_btn22");
        $(".d_btn3").toggleClass("d_btn33");
        $(".d_mablie_navehide1").toggle();
        $(".d_header_sec2").toggleClass("d_header_sec22")

    })

   
































})