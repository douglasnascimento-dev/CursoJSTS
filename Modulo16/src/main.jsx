import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Post } from './components/Post';
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound';
import { Contet } from './components/Content';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/posts' element={<Post />}>
          <Route path=':id' element={<Contet />}></Route>
        </Route>
        <Route path='/redirect' element={<Redirect />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
