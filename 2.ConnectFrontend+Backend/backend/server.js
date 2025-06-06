import express from "express";
import cors from 'cors'


const app = express();

app.get('/', (req, res) => {
    res.send('Books API is running'); 
});

 
app.get('/api', (req, res) => {
    const library = [ 
   {
       author: 'Haruki Murakami',
       title: 'Kafka on the Shore',
       readingStatus: true,
       year: 2002
   },
   {
       author: 'Chimamanda Ngozi Adichie',
       title: 'Half of a Yello w Sun',
       readingStatus: false,
       year: 2006
   },
   {
       author: 'George R.R. Martin',
       title: 'A Game of Thrones',
       readingStatus: true,
       year: 1996
   },
   {
       author: 'Margaret Atwood',
       title: 'The Handmaid\'s Tale',
       readingStatus: false,
       year: 1985
   },
   {
       author: 'Yuval Noah Harari',
       title: 'Sapiens: A Brief History of Humankind',
       readingStatus: true,
       year: 2011
   },
   {
       author: 'Neil Gaiman',
       title: 'American Gods',
       readingStatus: false,
       year: 2001
   },
   {
       author: 'Octavia E. Butler',
       title: 'Kindred',
       readingStatus: true,
       year: 1979
   },
   {
       author: 'Khaled Hosseini',
       title: 'The Kite Runner',
       readingStatus: true,
       year: 2003
   },
   {
       author: 'Toni Morrison',
       title: 'Beloved',
       readingStatus: false,
       year: 1987
   },
   {
       author: 'Brandon Sanderson',
       title: 'Mistborn: The Final Empire',
       readingStatus: true,
       year: 2006
   }
];

    res.send(library);
    // res.json(library);
});

app.use(cors()) 


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});