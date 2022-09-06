
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Header2 from './components/header/Header2';
import Message from './components/mesages/Message';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       {/* <Header2 /> */}
      <Header />
      <Message  className="wrapper"/>
      <Footer />
    </div>
  );
}

export default App;
