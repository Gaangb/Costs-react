import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/company' element={<Company />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/newproject' element={<NewProject />}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
