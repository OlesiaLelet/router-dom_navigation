import {BrowserRouter, Routes, Route} from 'react-router-dom';


 //pages
import Main from './components/Main/Main.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Photoalbum from './components/Photoalbum/Photoalbum.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Posts from './components/Posts/Posts.jsx';
import Header from './components/Header/Header.jsx';
import More from './components/More/More.jsx';
import  ProtectedRoutes from './utilits/ProtectedRoutes.jsx';
import './App.css';


export const elements = {
  path : '/',                 
  contacts: '/contacts',  
  photoalbum: '/photoalbum',
  posts: '/posts',   
  more: ':id',             
  signin: 'signIn',

}       



function App() {
  


  return (
    <div className="App">
     
      <BrowserRouter> 
      <Header/>
        <Routes>
      
          <Route path={elements.path} element={<Main/>}></Route>
          <Route path={elements.contacts} element={<Contacts/>}>
            <Route element={<ProtectedRoutes/>}>
              <Route path={elements.more} element={<More/>}></Route>
            </Route>
          </Route>

          <Route path={elements.photoalbum} element={<Photoalbum/>}></Route>
          <Route path={elements.posts} element={<Posts/>}></Route>
          <Route path={elements.signin} element={<SignIn/>}></Route>
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
