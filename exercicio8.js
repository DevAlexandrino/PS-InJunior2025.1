const booksByCategory = [
    {
        category: "Romance",
        books: [
            {
                title: "O Sol ambém é uma estrela",
                author: "Nicola Yoon",
            },
            {
                title: "O Noivo Da Minha Melhor Amiga",
                author: "Emily Giffin",
            },
            {
                title: "Orgulho e Preconceito",
                author: "Jane Austen",
            },

        ],
    },
    {
        category: "Fantasia",
        books: [
            {
                title: "Harry Potter e a Pedra Filosofal",
                author: "J.K. Rowling",
            },
            {
                title: "O Hobbit",
                author: "J.R.R. Tolkien",
            },
            {
                title: "Eragon",
                author: "Christopher Paolini",
            },
            {
                title: "O Nome do Vento",
                author: "Patrick Rothfuss",
            },
        ],
    },
    {
        category: "Suspense",
        books: [
            {
                title: "A Garota no Trem",
                author: "Paula Hawkins",
            },
            {
                title: "O Silencio dos Inocentes",
                author: "Thomas Harris",
            },
        ],
    },
    {
        category: "Ficção Cientifica",
        books: [
            {
                title: "Duna",
                author: "Fank Herbert",
            },
            {
                title: "Neuromancer",
                author: "William Gibson",
            },
            {
                title: "Fundação",
                author: "Isaac Asimov",
            },
            {
                title: "1984",
                author: "George Orwell",
            },
            {
                title: "O fim da infancia",
                author: "Arthur C. Clarke",
            },
        ],
    },
];

function countBooksInCategory(booksByCategory){
    let booksCategory = {
        Romance: 0,
        Fantasia: 0,
        Suspense: 0,
        Ficção: 0,
    }

    booksCategory.Romance = booksByCategory[0].books.length
    booksCategory.Fantasia = booksByCategory[1].books.length
    booksCategory.Suspense = booksByCategory[2].books.length
    booksCategory.Ficção = booksByCategory[3].books.length

    return booksCategory
}

let booksCaretegoryCount = countBooksInCategory(booksByCategory)
console.log(booksCaretegoryCount)