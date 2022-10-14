
import './App.css';
import Header from './components/header/Header';
// import Header2 from './components/header/Header2';
import Message from './components/mesages/Message';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gif from './components/gif/Gif';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Header2 /> */}
        <Header />

        <Routes>
          <Route path="/" element={<Message className="wrapper" />} />
          <Route path='/make-gif' element={<Gif />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
