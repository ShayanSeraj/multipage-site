import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';

function App() {

  const [loggedIn] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/articles/:id' element={<Articles />} />
          <Route path='/test' element={(
            <div>
              <h2>test page</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam perferendis suscipit mollitia impedit nobis alias ex? Quis facere autem fugit, sit est quaerat. Soluta velit obcaecati non sapiente quisquam!</p>
            </div>
          )} />
          <Route path='/shayan' element={loggedIn ? <p>Hello Shayan</p> : <Navigate to='/' /> } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
