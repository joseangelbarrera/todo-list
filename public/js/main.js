toastr.options.timeOut = 1500
toastr.options.positionClass = "toast-bottom-right"

$('.list-tasks .remove').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  const url = $thisElement.attr("href")
  const method = 'DELETE'
  $.ajax({ url, method })
    .done ( response => {
      $thisElement.parents('.list-group-item').remove()
    })
    .fail( () =>  alert("Try removing again champ!") );
})


$('.list-tasks .edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
    .parents("li")
      .find("form input")
        .removeClass("hidden")
        .focus()
        .end()
      .find("p")
        .addClass("hidden")
})

$(".edit-form").on("submit", function(e) {
  e.preventDefault();

  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  const editedValue = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: { editedValue }
  })
  .done( response => {
    $thisElement
      .siblings("p")
        .text(editedValue)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
    toastr.success(response)
  })
  .fail( () =>  alert("Try removing again champ!") );


})





//- curl -X PUT --data "task=cambio cambio" localhost:3000/task/5926e84faeb32b24c6b6a2d3