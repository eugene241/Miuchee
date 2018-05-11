

new WOW().init();
$('.parallax-brand, .parallax-subscription').parallax({});

$(document).ready(function() {
  $('.link-clothes-hover-1').mouseover(function() {
  $('.block-clothes-hover-1').animate({'opacity':'1'},10);
  });
  $('.link-clothes-hover-1').mouseout(function() {
  $('.block-clothes-hover-1').animate({'opacity':'0'},10);
  });
  $('.link-clothes-hover-2').mouseover(function() {
  $('.block-clothes-hover-2').animate({'opacity':'1'},10);
  });
  $('.link-clothes-hover-2').mouseout(function() {
  $('.block-clothes-hover-2').animate({'opacity':'0'},10);
  });
  $('.link-clothes-hover-3').mouseover(function() {
  $('.block-clothes-hover-3').animate({'opacity':'1'},10);
  });
  $('.link-clothes-hover-3').mouseout(function() {
  $('.block-clothes-hover-3').animate({'opacity':'0'},10);
  });
  $('.link-clothes-hover-4').mouseover(function() {
  $('.block-clothes-hover-4').animate({'opacity':'1'},10);
  });
  $('.link-clothes-hover-4').mouseout(function() {
  $('.block-clothes-hover-4').animate({'opacity':'0'},10);
  });
  $('.link-clothes-hover-5').mouseover(function() {
  $('.block-clothes-hover-5').animate({'opacity':'1'},10);
  });
  $('.link-clothes-hover-5').mouseout(function() {
  $('.block-clothes-hover-5').animate({'opacity':'0'},10);
  });
  $('.link-clothes-hover-6').mouseover(function() {
  $('.block-clothes-hover-6').animate({'opacity':'1'},10);
  });
  $('.link-clothes-hover-6').mouseout(function() {
  $('.block-clothes-hover-6').animate({'opacity':'0'},10);
  });
      // SCROLL
        
var wid = $(window).width();
  $('.shopping-bag, .count-purchase, .sum-purchase').click(function() {
  $(".block-basket").animate({
    right: '0px',
  },300);
  if(wid<768) {
  $('body').addClass('overflow-hidden');
  }
  else {
  }
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
// MENU
  $('.navbar-toggle-menu, .menu-header-text').click(function() {
    $('.menu-main').show(500);
  });
    $('.exit-menu').click(function() {
    $('.menu-main').hide(500);
  });
// SCROLL
if(wid>=768) {
  $("html").niceScroll({scrollspeed:50,});
}
else {
  
}

     
// SCROLL MENU LINK
if(wid<=767) {
 $('.a_1').click(function() {
 $('body, html').animate({
      scrollTop: 0
 }, 1000);
 $('.menu-main').hide(500);
 return false; 
});
$('.a_2').click(function() {
 $('body, html').animate({
scrollTop: 700
}, 1000);
 $('.menu-main').hide(500);
return false; 
});
$('.a_3').click(function() {
 $('body, html').animate({
scrollTop: 3600
}, 1000);
 $('.menu-main').hide(500);
return false; 
});
$('.a_4').click(function() {
 $('body, html').animate({
scrollTop: 4050
}, 1000);
 $('.menu-main').hide(500);
return false;
});

}
else {
 $('.a_1').click(function() {
 $('body, html').animate({
      scrollTop: 0
 }, 1000);
 $('.menu-main').hide(500);
 return false; 
});
$('.a_2').click(function() {
 $('body, html').animate({
scrollTop: 800
}, 1000);
 $('.menu-main').hide(500);
return false; 
});
$('.a_3').click(function() {
 $('body, html').animate({
scrollTop: 1900
}, 1000);
 $('.menu-main').hide(500);
return false; 
});
$('.a_4').click(function() {
 $('body, html').animate({
scrollTop: 2350
}, 1000);
 $('.menu-main').hide(500);
return false; 
});
}

$('.btn-down').click(function() {
  if(wid>768) {
  $('html').animate({
  scrollTop: 800
  }, 800);
}
else {
  $('html').animate({
  scrollTop: 700
  }, 800);
}
});
$('.logo-footer').click(function() {
  $('html').animate({
  scrollTop: 0
  }, 1000);
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
$('.circle-header-block').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
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