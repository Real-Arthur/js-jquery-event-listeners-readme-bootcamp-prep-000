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
  $().on('keydown', function() {
    alert("You've pushed ")
  })
  
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
