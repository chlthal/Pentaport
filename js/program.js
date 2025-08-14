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

    let idx = 0;
    let totalImages = $(".sec2-wrap>li").length;

    function updateModal(index){
        let $li = $(".sec2-wrap>li").eq(index);
        let imgSrc = $li.find("img.sec2-img").attr("src");
        let title = $li.data("title") || "";
        let desc = $li.data("desc") || "";

        $(".modalPopup .modal-img").attr("src", imgSrc);
        $(".modalPopup .modal-title").text(title);
        $(".modalPopup .modal-desc").text(desc);
    }

    // 이미지 클릭
    $(".sec2-content").on("click", "img.sec2-img", function(e){
        e.stopPropagation();
        idx = $(".sec2-img").index(this);
        updateModal(idx);
        $(".modalPopup").addClass("active");
    });

    // 이전 / 다음 버튼 클릭 
    $(".modalPopup").on("click", ".prev, .next", function(e){
        e.stopPropagation();
        if ($(this).hasClass("prev")) {
            idx = (idx - 1 + totalImages) % totalImages;
        } else {
            idx = (idx + 1) % totalImages;
        }
        updateModal(idx);
    });

    // 닫기 버튼
    $(".modalPopup").on("click", ".modalClose", function(e){
        e.stopPropagation();
        $(".modalPopup").removeClass("active");
    });



}) // jquery end