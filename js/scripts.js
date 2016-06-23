function makeFilteredArray(limit) {
  var filteredArray = [];
  for(i=1; i <= limit; i++) {
    if (i % 15 === 0) {
      filteredArray.push('ping-pong');
    } else if (i % 3 === 0) {
      filteredArray.push('ping');
    } else if (i % 5 === 0) {
      filteredArray.push('pong');
    }else {
      filteredArray.push(i);
    }
  }
  return filteredArray;
}

function Sparkle(x,y,id) {
  this.x = x;
  this.y = y;
  this.id = id;
}

function makeManySparkles(density, width, height) {
  var sparkleArray = [];
  for(i=0; i < density; i++) {
    var y = Math.random() * width;
    var x = Math.random() * height;
    sparkleArray.push(new Sparkle(x,y,i));
  }
  return sparkleArray;
}

$(function() {
  $(document).keydown(function(e) {
    var output = [];
    if (e.which === 13) {
      e.preventDefault();
      $('#output').html('');
      var width = $('.sparkle-container').width();
      var height = $('.sparkle-container').height();
      var limit = parseInt($('input').val() * 1);
      output = makeFilteredArray(limit);
      var sparkleArray = makeManySparkles((limit * 3), width, height );
      for(i=0; i < output.length; i++ ){
        $('#output').append('<h3>'+ output[i] +'</h3>');
      }
      sparkleArray.forEach(function(sparkle) {
        $('.sparkle-container').append("<div class='sparkle' id='sparkle"+sparkle.id+"'></div>");
        $('#sparkle' + sparkle.id).css({'top': sparkle.x, 'left': sparkle.y});
        $('#sparkle' + sparkle.id).fadeIn( Math.random() * 1000).fadeOut( Math.random() * 700);
      });
    }
    filteredArray = [];
    sparkleArray = [];
    output = [];

  });
});
