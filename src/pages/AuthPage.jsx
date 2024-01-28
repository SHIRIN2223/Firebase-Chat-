 import { signInWithPopup } from 'firebase/auth';
 import { auth, provider } from './../firebase/config';

const AuthPage = (setIsAuth) => {
    // google ile giriş

    const handleLogin = () => {
        signInWithPopup( auth, provider )
        .then(res => {
             // oturumu açık oldugunu uygulamada yönetmek için
 
            localStorage.setItem('token', res.user.refreshToken);
            // kullanıcı yetkili state'ini true ya çekme
            setIsAuth(true);
        })
        .catch((err) => console.log(err));
       
       
    };

    // hesaptan 
  return (
    <div className="container">
      <div className="auth">
         <h1>Chat Odası</h1>
         <p>Devam etmek için Giriş yapın</p>
         <button onClick={handleLogin}>
            <img src="/g-logo.png" alt="google-logo" />
            <span>Google ile gir</span>
         </button>
      </div>
    </div>
  )
}

export default AuthPage
