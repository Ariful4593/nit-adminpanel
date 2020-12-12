import React, { useContext, useState } from 'react'
import { Link, useHistory
 } from 'react-router-dom'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App'



const Login = () => {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBzUwfT2OlYveY3LTW-JMX7mvkGycWY9KI",
        authDomain: "nit-adminpanel.firebaseapp.com",
        projectId: "nit-adminpanel",
        storageBucket: "nit-adminpanel.appspot.com",
        messagingSenderId: "769704334138",
        appId: "1:769704334138:web:87eec696d45a33ff443603",
        measurementId: "G-8CCZ6PJXEX"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
    })

    const history = useHistory()

    const handleBlur = (e) => {
        let isFieldValid
        if (e.target.name === 'email') {
            // isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            isFieldValid = e.target.value
        }
        if (e.target.name === 'password') {
            // isFieldValid = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[0-9]){1})\S{6,20}$/.test(
            //     e.target.value
            // )
            isFieldValid = e.target.value
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }
    

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userData) => {
                    console.log(userData)
                    const newUser = { ...user };
                    newUser.error = '';
                    setUser(newUser);
                    setLoggedInUser(newUser)
                    localStorage.setItem('user', JSON.stringify(newUser))
                    history.push('/')

                })
                .catch((errorMessage) => {
                    const newError = { ...user }
                    newError.error = errorMessage.message;
                    setUser(newError)
                });
        }
        e.preventDefault()
    }

    return (
        <div className="mb-5">
            <div className='text-center'>
                <form onSubmit={handleSubmit}>
                    <div className='form-field p-4'>
                        <p>
                            <input
                                className='mb-2'
                                onBlur={handleBlur}
                                type='email'
                                name='email'
                                placeholder='Username or Email'
                                required
                            />
                        </p>
                        <p>
                            <input
                                className='mb-2'
                                onBlur={handleBlur}
                                type='password'
                                name='password'
                                placeholder='Password'
                                required
                            />
                        </p>

                        <p className='text-left mb-2 px-3'>
                            <input type='checkbox' name='checkbox' />
                            <span className='ml-3'>Remember Me</span>
                            <span className='float-right'>
                                <Link to="">Forgot Password</Link>
                            </span>
                        </p>
                        <input
                            className='mt-3'
                            type='submit'
                            value={'Login'}
                        />
                    </div>
                </form>
                <p>{user.error === '' ? '' : user.error}</p>
                {/* <div>
                    <p className='divider'></p>Or<p className='divider'></p>
                </div>
                <div className='mb-2 mt-3'>
                    <button className='sign-btn' onClick={fbLogIn}>
                        <img
                            className='media-icon'
                            src={googleIcon}
                            alt='google icon'
                        />
                    Continue with Facebook
                    </button>
                </div>
                <div>
                    <button className='sign-btn' >
                        <img className='media-icon' src={facebookIcon} alt='google icon' />
                    Continue with Google
                    </button>
                </div>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && (
                    <p style={{ color: 'green' }}>
                        you have successfully{' '}
                        {newUser ? 'created a new account' : 'logged in'}
                    </p>
                )} */}
            </div>
        </div>
    );
};

export default Login