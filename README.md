![images](https://user-images.githubusercontent.com/64249873/165435916-f4700ac8-13d0-4a49-bf47-289547214d32.jpg)
# NaijaBooks-Wiki-App! 

### Deployment:
- Netlify  https://naija-books-wiki-app.netlify.app/
- Heroku   https://naijabooksdatabase.herokuapp.com/api/details

### Project Description
The Naija Books Wiki App is a wiki built to showcase Nigerian literature at its finest. 
You can read a blurb of each book and a brief bio of each author to pique your interest. 
The wiki is built to enhance your visual enjoyment.

The app employs full CRUD and has a fully functional database, allowing for creating, reading, updating and deleting books as needed. The app capacity is inexhaustible.

The app is a working full-stack application, using the MERN stack:
- Node JS
- MongoDB/Mongoose
- Express JS
- React

---

### MVP
It performs full CRUD operations
It implements the Bootstrap Framework
It implements React-Router
API call using own database

##### POST MVP
- Implement filter functionality
- Add authentication feature
- Book Review 
- Purchase Suggestion
- Trivia
- Book Club

### Feature List
Search Functionality
CRUD functionality

### API Endpoint Documentation
```terminal
router.get('/', (req, res) => res.send('root')) // root 
router.post('/details', controllers.createDetail) // create functionality
router.get('/details', controllers.getDetails) // read functionality
router.get('/details/:id', controllers.getDetailById)  // id destructuring with useParams()
router.get('/search/:key', controllers.getDetail) // search functionality optimisation by ${input}
router.put('/details/:id', controllers.updateDetail) // edit functionality by id
router.delete('/details/:id', controllers.deleteDetail) // delete functionality ny id
```
---

### WireFrames
![Capturea](https://user-images.githubusercontent.com/64249873/165430986-676a6f05-9d79-4b88-a2fd-35fbc7f792ab.JPG)
![Capturec](https://user-images.githubusercontent.com/64249873/165435630-a9de2e16-3c65-4f47-9233-cec60f437a59.JPG)


### Component Hierarchy:
![Captureb](https://user-images.githubusercontent.com/64249873/165433417-0188314f-1d3d-4279-bde2-801124cbe182.JPG)

### Dependencies installed include:

##### Backend
```terminal
npm install axios mongoose cors morgan nodemon dotenv
```
##### Frontend
```terminal
npm install axios react-router-dom bootstrap, sass
```

Enjoy!



![download](https://user-images.githubusercontent.com/64249873/165436362-8dc1a5bd-3fec-49d6-83e7-38623cf0aa4f.png)




