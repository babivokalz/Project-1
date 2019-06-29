let bookInfo = function(search) {
  // Global Variables
  let div = $("<div>");

  // Set query paramaters
  let queryURL = "https://www.googleapis.com/books/v1/volumes?q=";
  queryURL += search;

  // AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) {
    console.log(data);
    // Find and store relevent information
    let title = $("<div>")
      .attr("id", "title")
      .text(data.items[0].volumeInfo.title);
    let subtitle = $("<div>")
      .attr("id", "subtitle")
      .text(data.items[0].volumeInfo.subtitle);
    let authors = $("<div>")
      .attr("id", "authors")
      .text(data.items[0].volumeInfo.authors);
    let description = $("<div>")
      .attr("id", "description")
      .text(data.items[0].volumeInfo.description);
    let pageCount = $("<div>")
      .attr("id", "pageCount")
      .text(data.items[0].volumeInfo.pageCount);
    let catagories = $("<div>")
      .attr("id", "catagories")
      .text(data.items[0].volumeInfo.categories);
    let averageRating = $("<div>")
      .attr("id", "averageRating")
      .text(data.items[0].volumeInfo.averageRating);

    let information = [
      title,
      subtitle,
      authors,
      description,
      pageCount,
      catagories,
      averageRating
    ];

    information.forEach(bit => {
      bit.attr("class", "book-info");
      div.append(bit);
    });

    $("#showSearchResults").append(div);
  });
};
