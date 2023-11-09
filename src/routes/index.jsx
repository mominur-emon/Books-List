import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksScreen from "../features/books/BooksScreen";
import AddBooks from "../features/books/AddBooks";
import Footer from "../layouts/Footer";
import EditBook from "../features/books/EditBook";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BooksScreen />} />
          <Route path="/add-book" element={<AddBooks />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Index;
