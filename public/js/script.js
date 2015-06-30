$(document).ready(function(){
  $('#con-wrap').hide();

  $('#wrap').tubular({videoId: 'ijOoE9zH9W4',ratio: 16/9});
  // $('#wrap').tubular({videoId: 'TpGbx4fxogE',ratio: 4/3});
  //ijOoE9zH9W4

  $('.btn').click(function(){
    // $('.container').slideToggle();
    $(".container").animate({marginTop : "-7px"}, 500);
    $('#con-wrap').show('slow');
  });

  $('#searchBtn').click(function(){
    var input = $('#search').val();
    $('#search').val('');
    $('#result').text(input);
    searchGiphy(input);
    $('.content').empty();
  });

  function searchGiphy(search){
    var api = "http://api.giphy.com/v1/gifs/search?q=_SEARCH_&api_key=dc6zaTOxFJmzC&limit=36";
    api = api.replace('_SEARCH_', search);
    $.ajax({
      url: api,
      method: 'GET',
      dataType: 'JSON',
      success: function(data){
        $.each(data.data, function(i,v){
          addImages(data.data[i].images.original_still.url, data.data[i].images.original.url);
        });
      },
      error: function(xhr, ajaxOptions, thrownError){
        console.log(xhr.status);
        console.log(thrownError);
      }
    });
  }

  function addImages(url, url2){
    var imgBox = '<div class="col-sm-4 item"><a class="fancybox" rel="group" href="_URL2_"><img src="_URL_" alt="" /></a></div>';
    imgBox = imgBox.replace('_URL_', url);
    imgBox = imgBox.replace('_URL2_', url2);

    $('.content').append(imgBox);
  }
  $(".fancybox").fancybox();
});