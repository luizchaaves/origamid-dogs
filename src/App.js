import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import NotFound from './Components/NotFound';
import UserProfile from './Components/User/UserProfile';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from './UserContext';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
