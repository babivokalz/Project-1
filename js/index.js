$("#form").submit(function(event) {
  event.preventDefault();

  let search = $("#input")
    .val()
    .trim();

  bookInfo(search);
  movieInfo(search);
});

// $(document).ready(function() {
//   $("#myButton").click(function() {
function showModal() {
  $("#myModal").modal("show");
});
