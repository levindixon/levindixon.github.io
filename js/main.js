$(document).ready(function() {
  
  var color = Math.floor(Math.random() * 5) + 1
  var full = 20;
  var half = 9;

  switch (color)
  {
  case 1:
    $('.thebar').addClass('green');
    break;
  case 2:
    $('.thebar').addClass('blue');
    break;
  case 3:
    $('.thebar').addClass('yellow');
    break;
  case 4:
    $('.thebar').addClass('red');
    break;
  case 5:
    $('.thebar').addClass('orange');
    break;
  }

  $('#html5').animate({ width: 4*full+half+'px' }, 2500);
  $('#css3').animate({ width: 4*full+half+'px' }, 2500);
  $('#javascript').animate({ width: 4*full+'px' }, 2500);
  $('#jquery').animate({ width: 4*full+'px' }, 2500);
  $('#responsive-design').animate({ width: 4*full+half+'px'}, 2500);
  $('#photoshop').animate({ width: 4*full+'px' }, 2500);
  $('#illustrator').animate({ width: 4*full+'px' }, 2500);
  $('#node').animate({ width: 3*full+'px' }, 2500);
  $('#rails').animate({ width: 2*full+half+'px' }, 2500);
  $('#php').animate({ width: '70px' }, 2500);
  $('#mongo').animate({ width: 3*full+'px' }, 2500);
  $('#mysql').animate({ width: 2*full+'px' }, 2500);
  $('#ios').animate({ width: 2.5*full+'px' }, 2500);
  $('#angular').animate({ width: 3*full+'px' }, 2500);
  $('#backbone').animate({ width: 2.5*full+'px' }, 2500);

  $('.readMore').click(function(){
    $('.readMore').hide()
    $('.more').fadeIn()
  })

  $('.seeMore2013').click(function(){
    if($(this).hasClass('seeLess2013')){
      $('.2013 > .minor').hide();
      $(this).removeClass('seeLess2013')
      $(this).text('More...');
    }else{
      $('.2013 > .minor').fadeIn();
      $('.seeMore2013').text('Less...');
      $('.seeMore2013').addClass('seeLess2013')
    }
  })

  $('.seeMore2012').click(function(){
    if($(this).hasClass('seeLess2012')){
      $('.2012 > .minor').hide();
      $(this).removeClass('seeLess2012')
      $(this).text('More...')
    }else{
      $('.2012 > .minor').fadeIn();
      $('.seeMore2012').text('Less...');
      $('.seeMore2012').addClass('seeLess2012')
    }
  })

  $('.tech').click(function(){
    $(this).parent().prev().show();
    $(this).parent().animate({
      left: "1000px"
    }, 320);
  })

  $('.deck').click(function(){
    $(this).parent().next().animate({
      left: "0px"
    }, 320, function(){
      $(this).prev().hide()
    });
  })

  if($('html').hasClass('touch')){
    $('.project').click(function(){
      $('.touchproject').each(function(){
        $(this).removeClass('touchproject')
      })
      $(this).addClass('touchproject')
    })
  }

});