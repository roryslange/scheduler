import { useAuth } from "../../contexts/AuthContext/AuthContext";


const Home = () => {
    const { isLoggedIn } = useAuth();
    const { currentUser } = useAuth();

    return (
        <div>
            home
            {isLoggedIn && <h2>{currentUser?.email}</h2>}
            {!isLoggedIn && <h2>nobody here</h2>}
        </div>
    );
}

export default Home;