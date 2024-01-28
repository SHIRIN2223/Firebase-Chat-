//import { signInWithPopup } from 'firebase/auth';
//import './App.css'
//import { auth, provider } from './firebase/config';

import { useState } from "react";
import AuthPage from "./pages/AuthPage";
//import { auth } from "./firebase/config";
//import { signOut } from "firebase/auth";
import RoomPage from "./pages/RoomPage";
import Chat from './pages/Chat';



function App() {
  // kullancının yetkisi var mı state'i tutuyoruz
  // state 'in ilk değerini local stroage'dan alıcas
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom ] = useState(null);

  //console.log(auth);
 //console.log(auth)

 // console.log(isAuth);

  //const handleLogin = () => {
    //signInWithPopup(auth, provider);
  
   
   // <>
    //<button onClick={handleLogin}>Google Ile Giriş Yap</button>
    //</>
    
    if  (!isAuth) {
      return <AuthPage setIsAuth={setIsAuth} />;

    }


    return (
      <div className="container">
      { room ? (
        // oda belirlendiyse > sohbet ekranı
         <Chat room={room} setRoom={setRoom} />
          ) : (
            // oda belirlenmediyse > oda seçme
          <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} /> )}
      </div>
    )
   
}
 export default App;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

