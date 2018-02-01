//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    return $('.tasty').append('img')
  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
