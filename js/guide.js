$(document).ready(function(){

    $(".answer").hide(); 
    $(".up-icon").hide(); 

    $(".question").click(function(){
        // 현재 클릭한 질문의 다음 요소가 열려있는지 확인
        if ($(this).next(".answer").css("display") === "block") {
            // 이미 열려 있으면 → 전부 닫기 + 아이콘 초기화
            $(".answer").slideUp(1000, function(){
                let titleOffset = $(".blue h2").offset().top;
                console.log("offset:", titleOffset);
                if (titleOffset > 1569) {
                    $(".blue h2").addClass("scrolled");
                } else {
                    $(".blue h2").removeClass("scrolled");
                }
            });
            $(".up-icon").hide();
            $(".down-icon").show();
        } else {
            // 전부 닫고 아이콘 초기화
            $(".answer").slideUp(1000);
            $(".up-icon").hide();
            $(".down-icon").show();

            // 클릭한 항목만 열기 + 아이콘 변경
            $(this).next(".answer").slideDown(1000, function(){
                let titleOffset = $(".blue h2").offset().top;
                console.log("offset:", titleOffset);
                if (titleOffset > 1069) {
                    $(".blue h2, .pink h2").addClass("scrolled");
                } else {
                    $(".blue h2, .pink h2").removeClass("scrolled");
                }
            });
            $(this).find(".down-icon").hide();
            $(this).find(".up-icon").show();
        }

        
    });

}); //jquery end
