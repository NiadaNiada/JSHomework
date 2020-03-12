class Movie{
    constructor(name, cast, genre) {
        this.name = name;
        this.cast = cast;
        this.genre = genre;
    }
    getDescription () {
        return `The ${this.name} is a ${this.genre} and has the following cast: ${this.cast + " "}`;
    }
    isPopular(raiting) {
        return raiting > 3;
    }
}

class SoapOpera extends Movie {
    constructor (name, cast, genre, numberOfSeasons) {
        super(name, cast, genre);
        this.numberOfSeasons = numberOfSeasons;
    }
}

class Cartoon extends Movie {
    constructor(name, cast, genre, musicBy) {
        super(name, cast, genre);
        this.musicBy = musicBy;
    }
}

const GameOfThrones = new SoapOpera("Game of Thrones", ["Emilia Clarke", "Kit Harington", "Lena Headey", "Iain Glen"], "fantasy drama", 8);
const ToyStory = new Cartoon("Toy Story", ["Tom Hanks", "Tim Allen", "Annie Potts", "Joan Cusack"], "family comedy", "Randy Newman");