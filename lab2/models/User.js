class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        const users = [
            new User(1, 'user1'),
            new User(2, 'user2'),
            new User(3, 'user3'),
            new User(4, 'user4'),
            new User(5, 'user5'),
            new User(6, 'user6'),
            new User(7, 'user7'),
        ];
        return users;
    }
}

module.exports = User;