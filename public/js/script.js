$(document).ready(function(){
  $('#con-wrap').hide();

  $('#wrap').tubular({videoId: 'ijOoE9zH9W4',ratio: 16/9});
  // $('#wrap').tubular({videoId: 'TpGbx4fxogE',ratio: 4/3});
  //ijOoE9zH9W4

  $('.btn').click(function(){
    // $('.container').slideToggle();
    $(".container").animate({marginTop : "-18px"}, 500);
    $('#con-wrap').show('slow');
  });
});