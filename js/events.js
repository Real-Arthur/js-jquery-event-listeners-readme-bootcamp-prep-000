//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    return $('img').addClass('tasty')
  })
}

function pressIt() {
  $().on('keydown', function(key) {
    if (key.which === 70)
    alert("You've pushed G!")
  })
  
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
