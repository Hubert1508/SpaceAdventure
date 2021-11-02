function hi(){

  setTimeout(function(){
    $('#text').html('Potrzebuję Twojej pomocy!');}, 2000);

  setTimeout(function(){
    $('#text').html('Znajdź mój prom kosmiczny!!!'); }, 4000);

}

function myFunction(){
  document.location.href = 'indexTwo.html';
}

function ship(){
  $("#flyShip").animate({top: '650px'});
  $('#textFlay1').css('opacity','0');
  $('#textFlay2').css('opacity','0');
  $('#textFlay').css('opacity','0');
  $('#textFlay1').css('opacity','10');
  $('#textFlay1').html('URATOWAŁEŚ NAS! :)');
  setTimeout(function(){
    $("#flyShip").animate({left: '1650px'});}, 2000);

}

function crash(){
  setTimeout(function(){
    $('#flyShip').css('opacity','0');}, 16000);

    setTimeout(function(){
    $('#textFlay').css('opacity','0');}, 16000);

      setTimeout(function(){
        $('#textFlay2').html('Stopiło nas słońce...');}, 16000);

}
