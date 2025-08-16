import './App.css';
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>

    <Header />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<BookingPage
          />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
