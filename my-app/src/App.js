import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Panier from './components/Panier';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/panier" element={<Panier />} />
                    <Route path="/signup" element={<SignUp />} />
                    {/* Add other routes here */}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
