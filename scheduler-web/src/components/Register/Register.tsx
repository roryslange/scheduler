import styles from './Register.module.scss';
import { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [err, setErr] = useState('');
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
    const { signUp } = useAuth();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const onChangeEmail = (e:any) => {
        setEmail(e.target.value);
        setIsValidEmail(emailRegex.test(e.target.value));
    }

    const onChangePassword = (e:any) => {
        setPassword(e.target.value);
        setIsValidPassword(e.target.value == confirmPassword);
    }

    const onChangeConfirmPassword = (e:any) => {
        setConfirmPassword(e.target.value);
        setIsValidPassword(password == e.target.value);
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (isValidEmail && isValidPassword) {
            try {
                await signUp(email, password);
            }
            catch (error:any) {
                setErr(error.message)
                console.error("error during signup ", error)
            }
        }
    }

    return (
        <div className={styles.content}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="email..." 
                style={{
                    borderColor: isValidEmail ? "black" : "red"
                }}
                onChange={onChangeEmail}
                ref={emailRef}
                required />

                <input 
                type="password" 
                placeholder="password..." 
                onChange={onChangePassword}
                style={{
                    borderColor: isValidPassword ? "black" : "red"
                }}
                ref={passwordRef}
                required />

                <input 
                type="password" 
                placeholder="confirm password..." 
                onChange={onChangeConfirmPassword}
                style={{
                    borderColor: isValidPassword ? "black" : "red"
                }}
                ref={passwordConfirmRef}
                required />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Register;