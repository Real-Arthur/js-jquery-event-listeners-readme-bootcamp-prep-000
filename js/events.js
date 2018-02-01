//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    return $('.tasty').bind('img')
  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
