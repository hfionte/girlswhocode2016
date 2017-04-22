// client-side js
$(function(){
  $('.pictures').cycle({fx:'fade'});
  
});

$.ajax("/external-navigation", {
  success:function(data){
    console.log($('#nav'));
    $('#nav').html(data);
  },
  error: function() {
    console.log('it did not work');
  }
});


//according to all known laws of aviation this movie is irrelevant

// $.ajax({
//   url: '/navigation',
//   success: function(data) {
//     $('#nav').html(data);
//   }
// });

// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// $(function() {
//   console.log('hello world :o');
  
//   $.get('/dreams', function(dreams) {
//     dreams.forEach(function(dream) {
//       $('<li></li>').text(dream).appendTo('ul#dreams');
//     });
//   });

//   $('form').submit(function(event) {
//     event.preventDefault();
//     dream = $('input').val();
//     $.post('/dreams?' + $.param({dream: dream}), function() {
//       $('<li></li>').text(dream).appendTo('ul#dreams');
//       $('input').val('');
//       $('input').focus();
//     });
//   });

// });




//$(function(){
 // $("ul li:first-child").mouseenter(function(){
   // $("ul li:first-child").fadeTo('fast',1);
    //$("ul li:first-child").mouseleave(function(){
     // $("ul li:first-child").fadeTo('fast',0.5);
      
    //});
    
  //});
  
//});



                  
                  
                  