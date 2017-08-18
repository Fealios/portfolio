$(document).ready(function(){
  $('#title').mouseover(function(){
    console.log('mouse over');
    $('#menu').show();
    $('#menu').addClass('bounce-in');
  });
});
