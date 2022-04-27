# Naija-Wiki-App

The Naija Books Wiki App is a wiki built to showcase Nigerian literature at its finest. 
You can read a blurb of each book and a brief bio of each author to pique your interest. 
The wiki is built to enhance your visual enjoyment.

The app employs full CRUD and has a fully functional database, allowing for creating, reading, updating and deleting books as needed. The app capacity is inexhaustible.

Deployment
Netlify https://naija-books-wiki-app.netlify.app/
Heroku https://naijabooksdatabase.herokuapp.com/api/details

MVP
The app is a working full-stack application, using the MERN stack:
Node JS
MongoDB/Mongoose
Express JS
React

It performs full CRUD operations
It implements the Bootstrap Framework
It implements React-Router
API call

Dependencies installed include:
axios, mongoose, cors, morgan, react-router-dom, bootstrap, nodemon, dotenv, sass

Feature List:
Search Functionality
CRUD functionality

Server Routes:
router.get('/', (req, res) => res.send('root'))
router.post('/details', controllers.createDetail) - create functionality
router.get('/details', controllers.getDetails) - read functionality
router.get('/details/:id', controllers.getDetailById)  - id destructuring - useParams
router.get('/search/:key', controllers.getDetail) - search functionality optimisation
router.put('/details/:id', controllers.updateDetail) - edit functionality
router.delete('/details/:id', controllers.deleteDetail) - delete functionality

Component Hierarchy:
<Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/books/:id' element={<Book/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/books/:id/editBook' element={<EditBook/>}/>
        <Route path="*" element={<PageNotFound/>}/>

