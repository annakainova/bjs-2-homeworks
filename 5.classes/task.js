//task 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  fix() {
    this.state = this.state * 1.5;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//task2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let book = this.books.find((item) => item[type] === value);
    if (book) {
      return book;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let book = this.books.find((item) => item.name === bookName);
    if (book) {
      let index = this.books.findIndex((item) => item.name === bookName);
      this.books.splice(index, 1);
      return book;
    } else {
      return null;
    }
  }
}

//task3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark >= 2 && mark <= 5) {
      if (this.marks.hasOwnProperty(subject)) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
      }
    }
  }

  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject)) {
      let result = this.marks[subject].reduce(
        (sum, current) => sum + current,
        0
      );
      return result / this.marks[subject].length;
    } else {
      return 0;
    }
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    } else {
      let sum = 0;

      for (let i = 0; i < subjects.length; i++) {
        sum += this.getAverageBySubject(subjects[i]);
      }

      return sum / subjects.length;
    }
  }
}
