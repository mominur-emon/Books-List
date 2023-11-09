import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksScreen = () => {
  const books = useSelector((state) => state.booksReducer.books);
  // console.log(books);
  const dispatch = useDispatch();
  //delete
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, author, title } = book;
              return (
                <tr key={id}>
                  <td>{author}</td>
                  <td>{title}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, author, title }}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteBook(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksScreen;
