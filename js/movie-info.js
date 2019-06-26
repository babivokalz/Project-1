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
    // Find and store relevent information
    let title = $("<div>")
      .attr("id", "title")
      .text(data.Title);
    let year = $("<div>")
      .attr("id", "year")
      .text(data.Year);
    let rated = $("<div>")
      .attr("id", "rated")
      .text(data.Rated);
    let released = $("<div>")
      .attr("id", "released")
      .text(data.Released);
    let runtime = $("<div>")
      .attr("id", "runtime")
      .text(data.Runtime);
    let genres = $("<div>")
      .attr("id", "genres")
      .text(data.Genre);
    let director = $("<div>")
      .attr("id", "director")
      .text(data.Director);
    let writer = $("<div>")
      .attr("id", "writer")
      .text(data.Writer);
    let actors = $("<div>")
      .attr("id", "actors")
      .text(data.Actors);
    let plot = $("<div>")
      .attr("id", "plot")
      .text(data.Plot);
    let language = $("<div>")
      .attr("id", "language")
      .text(data.Language);
    let country = $("<div>")
      .attr("id", "country")
      .text(data.Country);
    let awards = $("<div>")
      .attr("id", "awards")
      .text(data.Awards);
    let poster = $("<img>")
      .attr("id", "poster")
      .attr("src", data.Poster);
    let rating = $("<div>")
      .attr("id", "rating")
      .text(data.imdbRating);
    let type = $("<div>")
      .attr("id", "type")
      .text(data.Type);
    let totalSeasons = $("<div>")
      .attr("id", "totalSeasons")
      .text(data.totalSeasons);

    let information = [
      title,
      year,
      rated,
      released,
      runtime,
      genres,
      director,
      writer,
      actors,
      plot,
      language,
      country,
      awards,
      poster,
      rating,
      type,
      totalSeasons
    ];

    information.forEach(bit => {
      bit.attr("class", "movie-info");
      div.append(bit);
    });

    $(".container").append(div);
  });
};
