
import './App.css';
import { Header } from './header/Header';
import { Home } from './home/Home';
import {  Route, Routes } from "react-router-dom"
import { Checkout } from './Checkout/Checkout';
import { Login } from './Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/Stateprovider';



function App() {
  const [{} , dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('the USER is >>>' , authUser);
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
    })

  }, [])
  return (

    <div className="App">
     
      <Routes>
        <Route path='/login' element={<Login/> }/>
        <Route path="/" element={<><Header/> <Home/></>} />
        <Route path="/checkout" element={<> <Header/>  <Checkout/> </>}/>
       

      </Routes>









    </div>

  );
}

export default App;
