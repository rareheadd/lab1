class Books {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        const books = [
            new Books(1, 'Arturio', 'Author 1', 2020),
            new Books(2, 'Anna-Korenian', 'Author 2', 1919),
            new Books(3, 'Lotnisko', 'Author 3', 2008),
            new Books(4, 'Granica-CZOP', 'Author 4', 2004),
        ];
        return books;
    }
}

module.exports = Books;