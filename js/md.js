$(document).ready(function(){

    $(".h_sec3_md_background").hide()


    // 상품 네비
    $(".h_sec3>div").hide()
    $(".h_shirt").show()
    $(".h_nav_s").css("color","#ff50ad")
    
    $(".h_nav_s").on("click",function(){
        $(".h_nav_s").siblings("li").css("color","#191919")
        $(".h_nav_s").css("color","#ff50ad")
        $(".h_shirt").siblings("div").hide()
        $(".h_shirt").fadeIn()
    })
    $(".h_nav_c").on("click",function(){
        $(".h_nav_c").siblings("li").css("color","#191919")
        $(".h_nav_c").css("color","#ff50ad")
        $(".h_cap").siblings("div").hide()
        $(".h_cap").fadeIn()
    })
    $(".h_nav_t").on("click",function(){
        $(".h_nav_t").siblings("li").css("color","#191919")
        $(".h_nav_t").css("color","#ff50ad")
        $(".h_towel").siblings("div").hide()
        $(".h_towel").fadeIn()
    })
    $(".h_nav_g").on("click",function(){
        $(".h_nav_g").siblings("li").css("color","#191919")
        $(".h_nav_g").css("color","#ff50ad")
        $(".h_goods").siblings("div").hide()
        $(".h_goods").fadeIn()
    })




    // 상품 정보창

    // 셔츠 창 변경
    let md_shirt = [
        {
            text : "[8/1~3 현장 판매]2025 PENTAPORT 데스메탈 로고 티셔츠 워시드 블랙 39.000",
            src : src="./../img/hong/h_md/t1_txt.webp",
        },
        {
            text : "[8/1~3 현장 판매]2025 PENTAPORT 데스메탈 로고 티셔츠 화이트 39.000",
            src : src="./../img/hong/h_md/t2_txt.webp",
        },
        {
            text : "[8/1~3 현장 판매]2025 PENTAPORT 트라이벌 로고 티셔츠 멜란지 그레이 35,000",
            src : src="./../img/hong/h_md/t3img.webp",
        },
        {
            text : "[8/1~3 현장 판매]2025 PENTAPORT 레터링 티셔츠 화이트 35,000",
            src : src="./../img/hong/h_md/t4img.webp",
        },
        {
            text : "[8/1~3 현장 판매]2025 PENTAPORT 레터링 티셔츠 네이비 35,000",
            src : src="./../img/hong/h_md/t5img.webp",
        },
    ]
    

    // 캡 창 변경
    let md_cap = [
        {
            text : "2025 PENTAPORT 트라이벌 로고 볼캡 그레이 35,000",
            src : src="./../img/hong/h_md/c1img.webp",
        },
        {
            text : "2025 PENTAPORT 트라이벌 로고 볼캡 차콜 35,000",
            src : src="./../img/hong/h_md/c2img.webp",
        },
        {
            text : "2025 PENTAPORT 레터링 투톤 5패널 캡 35,000",
            src : src="./../img/hong/h_md/c3img.webp",
        },
        {
            text : "2025 PENTAPORT 레터링 5패널 캡 네이비 35,000",
            src : src="./../img/hong/h_md/c4img.webp",
        },
    ]

    // 타월 창 변경
    let md_towel = [
        {
            text : "2025 PENTAPORT 디즈니 슬로건 타월 차콜 18,050",
            src : src="./../img/hong/h_md/s1img.jpg",
        },
        {
            text : "2025 PENTAPORT 레터링 슬로건 타월 레드 17,100",
            src : src="./../img/hong/h_md/s2img.webp",
        },
        {
            text : "2025 PENTAPORT 레터링 슬로건 타월 네이비 17,100",
            src : src="./../img/hong/h_md/s3img.webp",
        },
    ]

    // 굿즈 창 변경
    let md_goods = [
        {
            text : "2025 PENTAPORT 디즈니 기타 피크 2P Set 10,000",
            src : src="./../img/hong/h_md/g1img.webp",
        },
        {
            text : "2025 PENTAPORT 트라이벌 로고 반다나 블랙 19,000",
            src : src="./../img/hong/h_md/g2img.webp",
        },
        {
            text : "2025 PENTAPORT 트라이벌 로고 반다나 레드 19,000",
            src : src="./../img/hong/h_md/g3img.webp",
        },
        {
            text : "2025 PENTAPORT 트라이벌 로고 키링 20,900",
            src : src="./../img/hong/h_md/g4img.webp",
        },
        {
            text : "2025 PENTAPORT 핀버튼 5,000원",
            src : src="./../img/hong/h_md/g5img.webp",
        },
    ]

    
    // $(".h_sec3_md_background").hide()

    // 셔츠 이미지 클릭하면 창 생성
    $(".h_shirt").on("click",function(){
        let num = $(".h_shirt").index(this)
        console.log(num)
        
        $(".h_sec3_md_background").show()
        $(".h_sec3_md_box_img").children("h1").text(md_shirt[num].text)
        $(".h_sec3_md_box_img").find("img").attr("src",md_shirt[num].src)
        
        console.log(".h_sec3_md_box_img["+num+"]")
    })

    // 캡 이미지 클릭하면 창 생성
    $(".h_cap").on("click",function(){
        let num = $(".h_cap").index(this)
        console.log(num)
        
        $(".h_sec3_md_background").show()
        $(".h_sec3_md_box_img").children("h1").text(md_cap[num].text)
        $(".h_sec3_md_box_img").find("img").attr("src",md_cap[num].src)
        
        console.log(".h_sec3_md_box_img["+num+"]")
    })

    // 타월 이미지 클릭하면 창 생성
    $(".h_towel").on("click",function(){
        let num = $(".h_towel").index(this)
        console.log(num)
        
        $(".h_sec3_md_background").show()
        $(".h_sec3_md_box_img").children("h1").text(md_towel[num].text)
        $(".h_sec3_md_box_img").find("img").attr("src",md_towel[num].src)
        
        console.log(".h_sec3_md_box_img["+num+"]")
    })

    // 굿즈 이미지 클릭하면 창 생성
    $(".h_goods").on("click",function(){
        let num = $(".h_goods").index(this)
        console.log(num)
        
        $(".h_sec3_md_background").show()
        $(".h_sec3_md_box_img").children("h1").text(md_goods[num].text)
        $(".h_sec3_md_box_img").find("img").attr("src",md_goods[num].src)
        
        console.log(".h_sec3_md_box_img["+num+"]")
    })






    $(".h_sec3_md_box_close").on("click",function(){
        $(".h_sec3_md_background").hide()
    })
    



}) //jquery end