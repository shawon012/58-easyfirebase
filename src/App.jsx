import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firbase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null)
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        setUser(loggedUser)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="App">
     
      <h1>firebase + React</h1>
      <button onClick={ handleGoogleSignIn}>Google Sign In</button>
      {user &&
        <div className="card">
          <h4>User: {user.displayName}</h4>
        
        </div>
      }
      
    </div>
  )
}

export default App


// echo "# 58-easyfirebase" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/58-easyfirebase.git
// git push -u origin main