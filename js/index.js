var wordArr = ["MUSIC", "ART", "CULTURE", "WAVE🌊"];
var interCnt = 0;
var wordInterval = setInterval(() => {
    $(".pentaport-is-txt").text(wordArr[interCnt]);
    if (interCnt >= wordArr.length - 1) {
        interCnt = 0;
    } else {
        interCnt++;
    }
}, 1000);
$(document).ready(() => {
    const tagTexts = ['PERFORMANCE', 'ART', 'JOY', 'MUSIC', 'ROCK'];
    const tagClasses = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];
    const tags = document.querySelectorAll('.floating-tags');
    tags.forEach((tag, index) => {
      // const position = { tag1: 10, tag2: 25, tag3: 40, tag4: 55,tag5: 70, tag6: 85,}
      // const tagClass = [...tag.classList].find(c => c.startsWith('tag'));
      // const left = position[tagClass] || 10;
      const left = Math.floor(Math.random() * 20) + 20;
      tag.style.left = `${left}%`;
      tag.style.animationDelay = `${index * 0.8}s`;
    });
 
  }) 
$(function () {
const GAP_MS = 8500; 
$('.floating-tags').each(function () {
  const $items = $(this).children('div'); 
  function startFalling() {
    $items.each(function () {
      const m = this.className.match(/tag(\d+)/);
      if (!m) return;
      const dropClass = 'dropTag' + m[1];
      $(this).removeClass(function (_, c) {
        return (c.match(/\bdropTag\d+\b/g) || []).join(' ');
      });
      void this.offsetWidth; 
      $(this).addClass(dropClass);
    });
    setTimeout(() => {
      $items.hide();  
      void document.body.offsetWidth; 
      $items.show();   
      startFalling();      
    }, GAP_MS);
  }
  startFalling();
});
});
$(document).ready(function(){
    
    let day1 = [
        {
            src : src = "./img/hong/h_main_slide/lineup_confinedwhite8.1.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_cryingNut8.1.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_hyang8.1.jpg",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_qwer8.1.png",
        },
        {
            src : src = "./img/hong/h_main_slide/catchtheyoung8.1.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_thouched8.1.png",
        },
    ]

    let day2 = [
        {
            src : src = "./img/hong/h_main_slide/lineup_beabadoobee8.2.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_kanekoayano8.2.jpg",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_kardi8.2.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_nerdconnection8.2.png",
        },
        {
            src : src = "./img/hong/h_main_slide/glen-check8.2.jpg",
        },
    ]    

    let day3 = [
        {
            src : src = "./img/hong/h_main_slide/lineup_beck8.3.png",
        },
        {
            src : src = "./img/hong/h_main_slide/babo8.3.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_audreynuna8.3.jpg",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_brabdysenki8.3.png",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_milledenials8.3.jpg",
        },
        {
            src : src = "./img/hong/h_main_slide/lineup_songsohee8.3.png",
        },
    ]

    $(".h_mySwiper").find(".swiper-slide").hide()
    for(i=0; i<day1.length; i++){
        
        $(".h_mySwiper").find(".swiper-slide:eq("+i+")").show()
        $(".h_mySwiper").find(".swiper-slide:eq("+i+")").find("img").attr("src",day1[i].src)
    }

    $(".h_day1_btn_black").on("click",function(){
        $(".swiper-slide").hide()
        for(i=0; i<day1.length; i++){
            
            $(".swiper-slide:eq("+i+")").show()
            $(".h_mySwiper").find(".swiper-slide:eq("+i+")").find("img").attr("src",day1[i].src)
            $(".h_mySwiper_program").find(".swiper-slide").show()
        }
    })
    $(".h_day2_btn_white").on("click",function(){
        $(".swiper-slide").hide()
        for(i=0; i<day2.length; i++){
            
            $(".swiper-slide:eq("+i+")").show()
            $(".h_mySwiper").find(".swiper-slide:eq("+i+")").find("img").attr("src",day2[i].src)
            $(".h_mySwiper_program").find(".swiper-slide").show()
        }
    })
    $(".h_day3_btn_black").on("click",function(){
        $(".swiper-slide").hide()
        for(i=0; i<day3.length; i++){
            
            $(".swiper-slide:eq("+i+")").show()
            $(".h_mySwiper").find(".swiper-slide:eq("+i+")").find("img").attr("src",day3[i].src)
            $(".h_mySwiper_program").find(".swiper-slide").show()
        }
    })
})
