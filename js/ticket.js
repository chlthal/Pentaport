$(document).ready(function(){
    let idx 
    let imgSrc
    $(".d_modal>li").on("click",function(){
        
        // let imgSrc = $(this).children("img").attr("src");
         idx = $(".d_modal>li").index(this)
         imgSrc = $(".d_modal>li:eq("+idx+")").children("img").attr("src");
        $(".d_modalPopup").children("img").attr({"src": imgSrc })
        $(".d_modalPopup").addClass("d_active")
    })
    $(".d_modalClose").on("click",function(){
        $(".d_modalPopup").removeClass("d_active")
    })
    $(".prev").on("click",function(){
        // idx -= 1;
        if(idx == 0){
            idx =3
        }else{
            idx -= 1;
        }
        imgSrc = $(".d_modal>li:eq("+idx+")").children("img").attr("src");
        $(".d_modalPopup").children("img").attr({"src": imgSrc })
    })

    $(".next").on("click",function(){
        if (idx == 3){
            idx = 0
        }else{
            idx += 1;
        }
         imgSrc = $(".d_modal>li:eq("+idx+")").children("img").attr("src");
        $(".d_modalPopup").children("img").attr({"src": imgSrc })
    })









})//end