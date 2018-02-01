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

function submitIt() {
  
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
