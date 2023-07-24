
const arr = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67]
console.log(arr)
const newArr = arr.filter((i) => i % 2 !==0 )
console.log(newArr)

 const filterBooks = (...books) => {
    const booksWithU = [];
    const otherBooks = [];

    for(const book of books) {
        const bookTitle = book.toLowerCase();

        if (bookTitle.includes('у') || bookTitle.includes('y')) {
            booksWithU.push(book);
        } else {
            otherBooks.push(book);
        }
    }

    console.log('Книги с буквой "у" или "y":', ...booksWithU);
    console.log('Остальные книги:', ...otherBooks);
}


const bookName = [
    'Гарри Поттер и философский камень',
    'Мастер и Маргарита',
    'Дюна',
    'Три товарища',
    'Маленький принц',
    '1984',
    'Властелин Колец',
    'Сто лет одиночества',
    'Бойцовский клуб',
];
filterBooks(...bookName);
