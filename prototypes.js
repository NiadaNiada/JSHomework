const Movie = function (name, cast, genre) {
    this.name = name;
    this.cast = cast;
    this.genre = genre;
};

Movie.prototype.getDescription = function () {
    return `The ${this.name} is a ${this.genre} and has the following cast: ${this.cast + " "}`;
};

Movie.prototype.isPopular = function (raiting) {
    return raiting > 3;
};

const SoapOpera = function (name, cast, genre, numberOfSeasons) {
    Movie.call(this, name, cast, genre);
    this.numberOfSeasons = numberOfSeasons;
};

const Cartoon = function (name, cast, genre, musicBy) {
    Movie.call(this, name, cast, genre);
   this.musicBy = musicBy;
};

Object.setPrototypeOf(SoapOpera.prototype, Movie.prototype);
Object.setPrototypeOf(Cartoon.prototype, Movie.prototype);

const GameOfThrones = new SoapOpera("Game of Thrones", ["Emilia Clarke", "Kit Harington", "Lena Headey", "Iain Glen"], "fantasy drama", 8);
const ToyStory = new Cartoon("Toy Story", ["Tom Hanks", "Tim Allen", "Annie Potts", "Joan Cusack"], "family comedy", "Randy Newman");


