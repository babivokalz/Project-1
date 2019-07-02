function showModal() {
  $("#myModal").modal("show");
}

$("#form").submit(function(event) {
  console.log("IM RUNNING");
  event.preventDefault();

  $("#form").append(
    '<div id="showSearchResults" style="background: white; display: flex;"></div>'
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
