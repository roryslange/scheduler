import { useEffect, useState } from 'react';
import { auth } from '../../../firebase-config';
import styles from './Login.module.scss';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import { useAuth } from '../../contexts/authContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const { userLoggedIn } = useAuth();
    const { currentUser } = useAuth();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onChangeEmail = (e:any) => {
        setEmail(e.target.value);
        setIsValidEmail(emailRegex.test(e.target.value));
    }

    const onChangePassword = (e:any) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (isValidEmail) {
            await doSignInWithEmailAndPassword(auth, email, password);
        }

        console.log(currentUser);
        
    }


    return (
        <div className={styles.content}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={email} 
                    placeholder='email...' 
                    onChange={onChangeEmail} 
                    style={{ borderColor: isValidEmail ? "black" : "red" }}
                    required />

                <input 
                    type='password' 
                    value={password} 
                    placeholder='password...' 
                    onChange={onChangePassword} 
                    required />

                <input type='submit' />
            </form>

            {userLoggedIn && <h2>user logged in: {currentUser.email}</h2>}
        </div>
    );
}

export default Login;