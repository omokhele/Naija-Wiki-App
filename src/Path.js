import { Route, Routes } from 'react-router-dom'
// import './App.css';
import Home from './components/routes/Home'
import Books from './components/routes/Books'
import Book from './components/routes/Book'
import AddBook from './components/routes/AddBook'
import EditBook from './components/routes/EditBook'
import PageNotFound from './components/routes/PageNotFound'
import About from './components/routes/About'
import Search from './components/routes/Search'


function Path() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/books/:id' element={<Book/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/books/:id/editBook' element={<EditBook/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default Path;