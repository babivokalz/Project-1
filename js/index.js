function showModal() {
  $("#myModal").modal("show");
}

$("#form").submit(function(event) {
  event.preventDefault();

  $("#form").append(
    '<div id="showSearchResults" style="background: white"></div>'
  );

  let search = $("#input")
    .val()
    .trim();

  bookInfo(search);
  $("#showSearchResults").append("<div id='gap'>");
  movieInfo(search);
});



// $('.parallax-window').parallax({imageSrc: 'bookbackground.jpg'});
