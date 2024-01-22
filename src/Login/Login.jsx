import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../firebase'


export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))


    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="https://th.bing.com/th/id/OIP.3ZJg2P-fzfHw3pjJyUJMuQHaE8?pid=ImgDet&rs=1" alt="" />
            </Link>
            <div className="login__container">
                <h1 > Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login__signin' type='submit' onClick={signin} >sign in</button>
                </form>
                <p>By signing in u agree to Amazon's fake clone condition of use & sale. Please see our privacy notice, our cookies notice and our intrest based Ads</p>
                <button className='login__register' onClick={register}>Create your amazon account</button>

            </div>
        </div>
    )

}
