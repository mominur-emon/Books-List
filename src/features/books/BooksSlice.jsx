import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialBooks = {
  books: [
    { id: uuid(), author: "Emon", title: "Amar Bangla" },
    { id: uuid(), author: "Rifat", title: "Mobile Game" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      //get data
      const { id, author, title } = action.payload;
      //check id match
      const isExistBook = state.books.filter((book) => book.id === id);
      //if id match update
      if (isExistBook) {
        isExistBook[0].title = title;
        isExistBook[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
