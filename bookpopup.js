$(document).ready(function(){
 var $bookPopUp = $('#bookPopUp');
 var $bookPopUpWrap = $('.bookPopUpWrap');
 var $close = $('#bookPopUp .close');
 var $feedBtn = $('.feed-btn');
 $feedBtn.on('click', function(){
  $bookPopUp.fadeIn();
 });
 $close.on('click', function(){
  $bookPopUp.fadeOut();
 });
 $bookPopUpWrap.on('click', function(e){
  e.stopPropagation();
 });
 $bookPopUp.on('click', function(e){
  $(this).fadeOut();
 });
});