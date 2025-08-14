$(document).ready(function(){

    //현재페이지 버튼 강조

    let currentPage = window.location.pathname.split("/").pop() 

    $(".program-btn").each(function () {
      let linkPage = $(this).attr("href");
      linkPage = linkPage.replace(/^(\.\/|\/)/, "");
      if (linkPage === currentPage) {
        $(this).addClass("active");
      }
    });

    //팝업창

    let idx
    let imgSrc
    
    $(".sec2-wrap>img").on("click", function(){
        idx = $(".sec2-wrap>img").index(this)
        imgSrc = $(".sec2-wrap>img:eq("+idx+")").attr("src")
        $(".modalMedia").find("img").attr({"src": imgSrc });
        $(".modalPopup").addClass("active");
    });
    $(".modalClose").on("click", function(){
        $(".modalPopup").removeClass("active")
    })
    $(".prev").on("click", function(){
        // idx = idx-1
        // idx -=1
        if(idx == 0){
            idx = 4
        }else{
            idx -=1
        }
        imgSrc = $(".sec2-wrap>img:eq("+idx+")").attr("src")
        $(".modalMedia").find("img").attr({"src": imgSrc });
    })
    $(".next").on("click", function(){
        // idx = idx-1
        // idx -=1
        if(idx == 4){
            idx = 0
        }else{
            idx +=1
        }
        imgSrc = $(".sec2-wrap>img:eq("+idx+")").attr("src")
        $(".modalMedia").children("img").attr({"src": imgSrc });
})



}) // jquery end