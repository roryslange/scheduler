import react, { useState } from 'react';
import { auth } from '../../../firebase-config';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import styles from './Login.module.scss';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState<User>();


    const onChangeEmail = (e:any) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e:any) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            setUser(user.user);
        }
        catch (err:any) {
            setError(err.message);
        }
        
    }




    return (
        <div className={styles.content}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={email} placeholder='email...' onChange={onChangeEmail}></input>
                <input type='text' value={password} placeholder='password...' onChange={onChangePassword}></input>
                <input type='submit'></input>
            </form>

            {user && <h2>user logged in: {user.email}</h2>}
        </div>
    );
}

export default Login;