
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
      console.log(i)
      $('#output').append('<h6>' + i + '</h6>')
    }
  }
}










////// UI


$(function() {


  $('#output').click(function() {
    var limit = parseInt($('input').val() * 1);
    alert(limit);
    makeFilteredArray(limit);
    filteredArray = [];
  });

});
