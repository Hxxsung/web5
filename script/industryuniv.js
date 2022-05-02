(function($){

  var industryuniv = {
    init: function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header: function(){
      $('.main-btn').on({
        mouseenter: function(){
         $('.sub-bg').slideDown(300);
         $('.sub').slideDown(300);
         $('.main-btn').removeClass('on');
         $(this).addClass('on');
       },
       focusin: function(){
        $('.sub-bg').slideDown(300);
        $('.sub').slideDown(300);
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
      }
      });

      $('.container').on({
        mouseleave: function(){
          $('.sub-bg').slideUp(300);
          $('.sub').slideUp(300);
          $('.main-btn').removeClass('on');
        }
      })
    },
    section1: function(){

    },
    section2: function(){

    },
    footer: function(){

    }
  }
  industryuniv.init();

})(jQuery);