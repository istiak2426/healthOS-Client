import Main from './components/Main';
import Footer from './components/sticky_nav/Footer';
import './app.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
