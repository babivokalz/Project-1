let movieInfo = function(search) {
  // Global Variables
  let div = $("<div>");

  // Set query paramaters
  let queryURL = "http://www.omdbapi.com/?apikey=6707b82f";
  queryURL += "&t=" + search;

  // AJAX Call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) {
    console.log(data);
    // Find and store relevent information
    let title = $("<div>")
      .attr("id", "title")
      .text("Title: " + data.Title);
    let year = $("<div>")
      .attr("id", "year")
      .text("Released: " + data.Year);
    let rated = $("<div>")
      .attr("id", "rated")
      .text("Rating: " + data.Rated);
    let released = $("<div>")
      .attr("id", "released")
      .text("Released: " + data.Released);
    let runtime = $("<div>")
      .attr("id", "runtime")
      .text("Runtime: " + data.Runtime);
    let genres = $("<div>")
      .attr("id", "genres")
      .text("Genres: " + data.Genre);
    let director = $("<div>")
      .attr("id", "director")
      .text("Director: " + data.Director);
    let writer = $("<div>")
      .attr("id", "writer")
      .text("Writer: " + data.Writer);
    let actors = $("<div>")
      .attr("id", "actors")
      .text("Notable Actors: " + data.Actors);
    let plot = $("<div>")
      .attr("id", "plot")
      .text("Plot: " + data.Plot);
    let awards = $("<div>")
      .attr("id", "awards")
      .text("Awards: " + data.Awards);
    let poster = $("<img>")
      .attr("id", "poster")
      .attr("src", data.Poster);
    let rating = $("<div>")
      .attr("id", "rating")
      .text("IMDB Rating: " + data.imdbRating);
    // let type = $("<div>")
    //   .attr("id", "type")
    //   .text(data.Type);
    // let totalSeasons = $("<div>")
    //   .attr("id", "totalSeasons")
    //   .text(data.totalSeasons);

    let information = [
      title,
      poster,
      year,
      rated,
      released,
      runtime,
      genres,
      director,
      writer,
      actors,
      plot,
      awards,
      rating
      // type,
      // totalSeasons
    ];

    div.append($("<h3>Movie</h3>"));

    information.forEach(bit => {
      bit.attr("class", "movie-info");
      div.append(bit);
      // div.css({
      //   display: "flex",
      //   "flex-direction": "column",
      //   "text-align": "left"
      // });
    });

    $("#showSearchResults").append(div);
  });
};
