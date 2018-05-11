
$(document).ready(function() {
  $('.slider-range-min-1').draggable();

  var wid = $(window).width();
  $('.shopping-bag, .count-purchase, .sum-purchase, .catalog-choice-formalization-link').click(function() {
  $(".block-basket").animate({
    right: '0px',
  },300);
  if(wid<768) {
  $('body').addClass('overflow-hidden');
  }
  else {
  }
  return false;
  });
  $('.exit-basket-img').click(function() {
  $(".block-basket").animate({
  right: '-351px',
  },300);
  if(wid<768) {
  $('body').removeClass('overflow-hidden');
  }
  else {  
  }
  });


  $(window).scroll(function () {
  if ($(this).scrollTop() >= 110 && wid>=768) {
  $('.block-catalog-settings-no-fixed').addClass('block-catalog-settings-fixed');
  } 
  else {
  $('.block-catalog-settings-no-fixed').removeClass('block-catalog-settings-fixed');
  }
  });
  $('.logo-footer').click(function() {
  $('html').animate({
  scrollTop: 0
  }, 1000);
  });
  if(wid>=768) {
    $("html").niceScroll({scrollspeed:50,});
  }
  else {  
  }
  $('.catalog-link-hover-img').click(function() {
  if(wid>=768) {
  $('.catalog-thing').removeClass('catalog-thing-absolute');
  $('.catalog').animate({
    'opacity':'hide'
  });
  }
  else {
   $('.catalog-thing').addClass('catalog-thing-absolute'); 
   $('.catalog').animate({
    'opacity':'hide'
   });
   $('.catalog-thing').animate({
    'opacity':'show'
   });
  $('.catalog-thing-slider').slick('setPosition');  
  }
  $('html').animate({
    scrollTop: 0
  }, 1000);
  return false;
  });
  $('.catalog-thing-back-text').click(function() {
  if(wid>=768) {
  $('.catalog-thing').addClass('catalog-thing-absolute');
  $('.catalog').animate({
    'opacity':'show'
  });
  }
  else {
   $('.catalog-thing').addClass('catalog-thing-absolute'); 
   $('.catalog').animate({
    'opacity':'show'
   }, 10);
   $('.catalog-thing').animate({
    'opacity':'hide'
   }, 10);
   $('.catalog-thing-slider').slick('setPosition'); 
  }
  $('html').animate({
    scrollTop: 0
  }, 1000);
  return false;
  });
  
// MENU
  $('.navbar-toggle-menu, .menu-header-text').click(function() {
    $('.menu-main').show(500);
  });
    $('.exit-menu').click(function() {
    $('.menu-main').hide(500);
  });
  $('.catalog-choice-price-link').click(function() {
   $('.box-modal').show(400);
   return false;
  });
  $('.exit-box-modal').click(function() {
   $('.box-modal').hide(400);
  });
$('.basket-points-button-delivery').click(function() {
  $('.basket-points-button-delivery').addClass('basket-points-button-hover');
  $('.basket-points-button-things').removeClass('basket-points-button-hover');
  $('.basket-points-button-payment').removeClass('basket-points-button-hover');
  $('.delivery-basket-points-button-img').removeClass('hidden-button');
  $('.things-basket-points-button-img').addClass('hidden-button');
  $('.payment-basket-points-button-img').addClass('hidden-button');
});
$('.basket-points-button-payment').click(function() {
  $('.basket-points-button-delivery').removeClass('basket-points-button-hover');
  $('.basket-points-button-things').removeClass('basket-points-button-hover');
  $('.basket-points-button-payment').addClass('basket-points-button-hover');
  $('.delivery-basket-points-button-img').addClass('hidden-button');
  $('.things-basket-points-button-img').addClass('hidden-button');
  $('.payment-basket-points-button-img').removeClass('hidden-button');
});
$('.basket-points-button-things').click(function() {
  $('.basket-points-button-delivery').removeClass('basket-points-button-hover');
  $('.basket-points-button-things').addClass('basket-points-button-hover');
  $('.basket-points-button-payment').removeClass('basket-points-button-hover');
  $('.delivery-basket-points-button-img').addClass('hidden-button');
  $('.things-basket-points-button-img').removeClass('hidden-button');
  $('.payment-basket-points-button-img').addClass('hidden-button');
});

$('.catalog-points-button-3').click(function() {
 $('.catalog-choice-text-size').removeClass('catalog-choice-text-size-result');
 $('.catalog-points-button-1').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-2').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-3').addClass('catalog-points-button-hover');
 $('.catalog-points-button-4').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-img-1').addClass('hidden-button');
 $('.catalog-points-button-img-2').addClass('hidden-button');
 $('.catalog-points-button-img-3').removeClass('hidden-button');
 $('.catalog-choice-text-size').text('Ваш объем Бедер');
 $('.catalog-choice-img-size').attr("src", 'img/img-size-3.png');
});
$('.catalog-points-button-2').click(function() {
 $('.catalog-choice-text-size').removeClass('catalog-choice-text-size-result');
 $('.catalog-points-button-1').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-2').addClass('catalog-points-button-hover');
 $('.catalog-points-button-3').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-4').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-img-1').addClass('hidden-button');
 $('.catalog-points-button-img-2').removeClass('hidden-button');
 $('.catalog-points-button-img-3').addClass('hidden-button');
 $('.catalog-choice-text-size').text('Ваш объем Талии');
 $('.catalog-choice-img-size').attr("src", 'img/img-size-2.png');
});
$('.catalog-points-button-1').click(function() {
 $('.catalog-choice-text-size').removeClass('catalog-choice-text-size-result');
 $('.catalog-points-button-1').addClass('catalog-points-button-hover');
 $('.catalog-points-button-2').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-3').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-4').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-img-1').removeClass('hidden-button');
 $('.catalog-points-button-img-2').addClass('hidden-button');
 $('.catalog-points-button-img-3').addClass('hidden-button');
 $('.catalog-choice-text-size').text('Ваш объем груди');
 $('.catalog-choice-img-size').attr("src", 'img/img-size-1.png');
});
$('.catalog-points-button-4').click(function() {
 $('.catalog-points-button-1').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-2').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-3').removeClass('catalog-points-button-hover');
 $('.catalog-points-button-4').addClass('catalog-points-button-hover');
 $('.catalog-points-button-img-1').addClass('hidden-button');
 $('.catalog-points-button-img-2').addClass('hidden-button');
 $('.catalog-points-button-img-3').addClass('hidden-button');
 $('.catalog-choice-text-size').text('На Вас отлично будет сидеть размер S !)');
 $('.catalog-choice-img-size').attr("src", 'img-size-1.png');
 $('.catalog-choice-text-size').addClass('catalog-choice-text-size-result');
});

 //SET HOVER EFFECTS VIDEO
  $('.catalog-img-1, .block-clothes-hover-1').mouseover(function() {
  $('.block-clothes-hover-1').animate({'opacity':'1'},10);
  });
  $('.catalog-img-1, .block-clothes-hover-1').mouseout(function() {
  $('.block-clothes-hover-1').animate({'opacity':'0'},10);
  });


});
// HIDDEN OFF BLOCK
$(document).mouseup(function (e) {
  var wid1 = $(window).width();
  var container = $(".block-basket");
  if (container.has(e.target).length === 0){
    container.animate({
    right: '-351px',
    },300);
    if(wid1<768) {
    $('body').removeClass('overflow-hidden');
    }
    else {  
    }
    }
});