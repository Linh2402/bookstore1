import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Login from './pages/Login';
import Register from './pages/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Annoucement from './components/Annoucement';
import Newsletter from './components/Newsleter';
import Footer from './components/Footer';
import BookList from './pages/BookList';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Annoucement />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" exact element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
