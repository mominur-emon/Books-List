import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";
import { v4 as uuid } from "uuid";

const AddBooks = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  //here i'm useing uuid thats why dont need to this
  // const numberOfBook = useSelector((state) => state.booksReducer.books.length);
  // console.log(numberOfBook);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuid(), author, title };
    dispatch(addBook(book));
    navigate("/");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-field ">
          <label htmlFor="title"> Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ marginLeft: "15px" }}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
