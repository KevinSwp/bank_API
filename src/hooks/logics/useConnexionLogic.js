import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../reducers/userReducer';
import userData from '../../data/data';
import useFetch from '../useFetch';

const useConnexionLogic = (userName, userPassword) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, loading, error } = useFetch('http://localhost:3001/api/login');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const email = userName;
        const password = userPassword;
        const user = userData.find(u => u.email === email && u.password === password);
        
        console.log('Found User:', user);
        console.log('Loading Status:', loading);
        console.log('Fetch Error:', error);
        console.log('API Response Data:', data);

        if (user && !loading && !error) {
            const token = data[0];
            console.log("Token obtenu:", token);
            console.log("Loading:", loading, "Error:", error);

            dispatch(saveToken({
                token: token,
                username: `${user.firstName} ${user.lastName}`
            }));
            navigate('/about');
        } else {
            console.error("Incorrecte"); // Error message indicating failed login attempt
        }
    }

    return { handleSubmit, loading, error };
};

export default useConnexionLogic;
