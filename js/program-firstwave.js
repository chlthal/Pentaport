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



}) // jquery end