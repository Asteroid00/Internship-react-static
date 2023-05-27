import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.example.com/books?search=${searchTerm}`);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Routes>
          <Route path="/signup" Component={SignUpForm}/>
          <Route path="/login" Component={LogInForm} />
        </Routes>
      <main>
        <h1>Welcome to My Book Search App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a book"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default App;
