import { useState } from 'react';
import styles from './Login.module.scss';
import { useAuth } from '../../contexts/AuthContext/AuthContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const { signIn } = useAuth();
    const { signOut } = useAuth();
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
            try {
                await signIn(email, password);
            } catch (error: any) {
                setError(error.message);
                console.error("error signing in: ", error);
            }
        }    
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

            {currentUser && <h2>user logged in: {currentUser.email}</h2>}

            <button onClick={signOut}>sign out</button>
        </div>
    );
}

export default Login;