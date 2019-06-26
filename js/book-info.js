let bookInfo = function(search) {
  // Global Variables
  let data;

  // Set query paramaters
  //   let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" += search;
  let queryURL = "https://www.googleapis.com/books/v1/volumes?q=";
  queryURL += search;

  // AJAX call
  $.ajax(
    {
      url: queryURL,
      method: "GET"
    },
    function(d) {
      data = d;
    }
  );

  // Create the div
  let div = $("<div>");

  // Find and store relevent information
  let title = $("<div>")
    .attr("id", "title")
    .text(data.items.volumeInfo.title);
  let subtitle = $("<div>")
    .attr("id", "subtitle")
    .text(data.items.volumeInfo.subtitle);
  let authors = $("<div>")
    .attr("id", "authors")
    .text(data.items.volumeInfo.authors);
  let description = $("<div>")
    .attr("id", "description")
    .text(data.items.volumeInfo.description);
  let pageCount = $("<div>")
    .attr("id", "pageCount")
    .text(data.items.volumeInfo.pageCount);
  let catagories = $("<div>")
    .attr("id", "catagories")
    .text(data.items.volumeInfo.categories);
  let averageRating = $("<div>")
    .attr("id", "averageRating")
    .text(data.items.volumeInfo.averageRating);

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

  return div;
};
