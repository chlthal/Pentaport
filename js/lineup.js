$(function () {
  let images = [];
  let currentIndex = 0;

  /* ✅ 이미지 목록 수집 (more 제외)
     1) 파일명에 'more' 포함되면 제외
     2) .no-zoom 클래스가 붙은 것도 제외 (관리 편함)
  */
  $(".cs_sec4 img").each(function(){
    const $img = $(this);
    const src = ($img.attr("src")||"").trim();
    const low = src.toLowerCase();
    const isNoZoomClass = $img.hasClass("no-zoom");
    const looksLikeMore = low.includes("more");
    if (src && !isNoZoomClass && !looksLikeMore) images.push(src);
  });

  // 이미지 클릭 → 모달 오픈 (배열에 있는 것만)
  $(".cs_sec4").on("click", "img", function(e){
    const src = ($(this).attr("src")||"").trim();
    if (!images.includes(src)) return; // more/제외 대상이면 무시
    e.preventDefault();

    currentIndex = images.indexOf(src);
    showImage(currentIndex);
    $("#imgModal").addClass("show");
  });

  // 배경(히트에어리어) 클릭 → 닫기
  $("#imgModal .modal-hitarea").on("click", function(){
    $("#imgModal").removeClass("show");
  });

  // X 클릭 → 닫기
  $("#imgModal .img-modal-close").on("click", function(e){
    e.stopPropagation();
    $("#imgModal").removeClass("show");
  });

  // 이전/다음
  $("#imgModal .img-modal-prev").on("click", function(e){
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  $("#imgModal .img-modal-next").on("click", function(e){
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // 키보드
  $(document).on("keydown", function(e){
    if (!$("#imgModal").hasClass("show")) return;
    if (e.key === "Escape") $("#imgModal").removeClass("show");
    if (e.key === "ArrowLeft") $("#imgModal .img-modal-prev").click();
    if (e.key === "ArrowRight") $("#imgModal .img-modal-next").click();
  });

  function showImage(i){
    $("#imgModal .modal-img").attr("src", images[i]);
  }
});