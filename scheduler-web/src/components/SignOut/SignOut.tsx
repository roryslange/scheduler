import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';


export default function SignOut() {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut;
        navigate('/login');
    };

    useEffect(() => {
        handleSignOut();
    }, []);

    return (
        <></>
    );
}
