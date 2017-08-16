$(document).ready(function(){
  $('#title').mouseover(function(){
    console.log('mouse over');
    $('#hidden').show();
    $('#hidden').addClass('bounce-in');
  });
});
