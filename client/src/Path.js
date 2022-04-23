import { Route, Routes } from 'react-router-dom'
// import './App.css';
import Home from './components/routes/Home'
import Details from './components/routes/Details'
import Detail from './components/routes/Detail'
import CreateDetail from './components/routes/CreateDetail'
import EditDetail from './components/routes/EditDetail'
import PageNotFound from './components/routes/PageNotFound'


function Path() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/details' element={<Details/>}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/create-new-detail' element={<CreateDetail/>}/>
        <Route path='/details/:id/edit-detail' element={<EditDetail/>}/> */}
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default Path;