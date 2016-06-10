var filteredArray = [];
var testLimit = 15;

function makeFilteredArray(limit) {
  for(i=1; i <= limit; i++) {
    if (i % 15 === 0) {
      filteredArray.push('ping pong');
      console.log('ping pong');
      $('#output').append('<h2> ping pong </h2>');
    } else if (i % 3 === 0) {
      filteredArray.push('ping');
      console.log('ping');
      $('#output').append('<h3> ping </h3>');
    } else if (i % 5 === 0) {
      filteredArray.push('pong');
      console.log('pong');
      $('#output').append('<h3> pong </h3>');
    }else {
      filteredArray.push(i);
      console.log(i);
      $('#output').append('<h6>' + i + '</h6>')
    }
  }
}

function makeSparkle(x,y,id) {
  $('.sparkle-container').append("<div class='sparkle' id='sparkle"+id+"'></div>");
  $('#sparkle' + id).css({'top': x, 'left': y});
  $('#sparkle' + id).fadeIn( Math.random() * 1000).fadeOut( Math.random() * 700);
}

function makeManySparkles(density) {
  var width = $('.sparkle-container').width();
  var height = $('.sparkle-container').height();
  // alert(width);
  // alert(height);
  for(i=0; i < density; i++) {
    var y = Math.random() * (width) + "px";
    console.log(x);
    var x = Math.random() * (height) + "px";
    console.log(x);
    setTimeout( makeSparkle(x,y,i), 500);
  }
}

////// UI

$(function() {
  $(document).keydown(function(e) {
    if (e.which === 13) {
    $('#output').html('');
    var limit = parseInt($('input').val() * 1);
    //alert(limit);
    makeManySparkles(100);
    makeManySparkles(100);
    makeManySparkles(100);
    makeFilteredArray(limit);
    filteredArray = [];
    e.preventDefault();
   }
  });
});
