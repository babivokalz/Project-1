function showModal() {
  $("#myModal").modal("show");
}

$("#form").submit(function(event) {
  event.preventDefault();

  $("#form").append(
    '<br><br><div id="showSearchResults" style="background-color: rgba(240,240,240,0.65)"></div>'
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
