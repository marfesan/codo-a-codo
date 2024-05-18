document.addEventListener("DOMContentLoaded", function() {
  var movies = [
    { title: "El Padrino", director: "Francis Ford Coppola", year: 1972, image: "imagenes/el padrino.webp" },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, image: "imagenes/Pulp Fiction.jpg" },
    { title: "El Señor de los Anillos: La Comunidad del Anillo", director: "Peter Jackson", year: 2001, image: "imagenes/El Señor de los Anillos.webp" },
    { title: "Interestelar", director: "Christopher Nolan", year: 2014, image: "imagenes/Interestelar.png" },
    { title: "Parásitos", director: "Bong Joon-ho", year: 2019, image: "imagenes/Parásitos.webp" }
  ];

  var movieList = document.getElementById("movie-list");

  movies.forEach(function(movie) {
    var li = document.createElement("li");
    var imgContainer = document.createElement("div");
    var img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;
    imgContainer.appendChild(img);
    li.appendChild(imgContainer);
    var textContainer = document.createElement("div");
    textContainer.innerHTML = "<strong>Título:</strong> " + movie.title + "<br><strong>Director:</strong> " + movie.director + "<br><strong>Año:</strong> " + movie.year;
    li.appendChild(textContainer);
    movieList.appendChild(li);
  });
});
