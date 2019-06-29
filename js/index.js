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
