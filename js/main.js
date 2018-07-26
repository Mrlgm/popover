let n = 1
$('#clickMe').on('click', function() {
  if (n % 2) {
    $('#fuceng').css({
      display: "block"
    })
  } else {
    $('#fuceng').css({
      display: "none"
    })
  }

  $(document).on('click', function() {
    $('#fuceng').css({
      display: "none"
    })
    n = 1
  })
  n += 1
})

$('#wrapper').on('click', function(e) {
  e.stopPropagation()
})//阻止冒泡