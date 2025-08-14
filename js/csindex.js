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
  const GAP_MS = 10000; 
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

