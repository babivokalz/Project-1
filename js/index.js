$("#form").submit(function(event) {
  event.preventDefault();

  let search = $("#input")
    .val()
    .trim();

  bookInfo(search);
  movieInfo(search);
});

function showModal() {
  $("#myModal").modal("show");
}

function showSearchResults(e) {
  $("form").after('<div style="background: white">show results here</div>');
  e.preventDefault();
}
