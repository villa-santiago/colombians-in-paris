import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';
import Layout from './components/Layout'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<HomePage />}/>
          <Route path = "create" element = {<CreatePostPage />}/>
          <Route path = "posts/:id" element = {<PostDetailPage />}/> 
          <Route path = "about" element = {<AboutPage />}/>
          <Route path = "contact" element = {<ContactPage />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
