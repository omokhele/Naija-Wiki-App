// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import Header from './components/layout/Header';
// import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Path from './Path';

function App() {
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Nigerian Books <span className="text-secondary">Wiki</span></h1>
     <Header/>
     <Path/>
     <Footer/>
    </div>
  );
}

export default App;
