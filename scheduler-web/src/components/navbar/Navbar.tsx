import styles from './Navbar.module.scss';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const { signOut } = useAuth();

    const links = [
        {
            title: 'home',
            path: '/',
            enabled: true,
        },
        {
            title: 'Sign In',
            path: '/login',
            enabled: !isLoggedIn,
        },
        {
            title: 'Sign Up',
            path: '/register',
            enabled: !isLoggedIn,
        },
    ];
    
    return (
        <div className={styles.container}>
            <h2>Scheduler</h2>
            <ul className={styles.links}>
                { links.map((data, index) => (
                    <span>
                        { data.enabled && 
                            <li key={index}>
                                <NavLink to={data.path}>
                                    {data.title}
                                </NavLink>
                            </li> }
                    </span>
                )) }


                { isLoggedIn && 
                    <li>
                        <NavLink to='/login' onClick={signOut}>Sign Out</NavLink>
                    </li>
                }
            </ul>
        </div>
    );
}

export default Navbar;