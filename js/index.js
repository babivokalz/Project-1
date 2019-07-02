function showModal() {
  $("#myModal").modal("show");
}

$("#form").submit(function(event) {
  event.preventDefault();

  $("#form").append(
    '<br><br><div id="showSearchResults" style="background: white"></div>'
  );

  let search = $("#input")
    .val()
    .trim();
  $("#showSearchResults").empty();
  bookInfo(search);
  $("#showSearchResults").append("<div id='gap'>");
  movieInfo(search);
});

// $('.parallax-window').parallax({imageSrc: 'bookbackground.jpg'});
