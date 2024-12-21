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

function authors(booksByCategory){
    let authors = [];
    for (let i = 0; i < booksByCategory.length; i++){
        for (let j = 0; j < booksByCategory[i].books.length; j++){
            authors.push(booksByCategory[i].books[j].author)
        }      
    }

    return authors;
}

let arrayAuthors = authors(booksByCategory)
console.log(arrayAuthors)