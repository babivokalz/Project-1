function showModal() {
  $("#myModal").modal("show");
}

function showSearchResults(e) {
  //   $("form").after(
  //     '<div id="showSearchResults" style="background: white">show results here</div>'
  //   );
  //   e.preventDefault();
}

$("#form").submit(function(event) {
  console.log("IM RUNNING");
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
