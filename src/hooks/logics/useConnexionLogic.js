import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../reducers/userReducer";

/**
 * Custom hook to manage user connection logic.
 */
const useConnexionLogic = (userName, userPassword) => {

  // Hook from react-router-dom to programmatically navigate.
  const navigate = useNavigate();

  // Hooks from react-redux to dispatch actions and select state from the Redux store.
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Local state for isLoading and error management.
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  /**
   * Handles the submission of the login form.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = userName;
    const password = userPassword;

    // Make an API call to login the user.
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    .then((response) => {
      if (!response.ok) throw new Error('Identifiant ou mot de passe invalide');
      return response.json();
    })

    .then((data) => {
      setIsLoading(false);
      dispatch(
        saveToken({
          token: data.body.token,
          username: ``,
        })
      );
      // If success connection , reinit error.
      setIsError(null);
    })
    
    .catch((error) => {
      console.error(error);
      setIsLoading(false);
      setIsError(error.message);
    });
  };

  // Effect to navigate to the profile page if the user has a valid token.
  useEffect(() => {
    if (user.token) {
      navigate("/profil");
    }
  }, [user, navigate]);

  return { handleSubmit, isLoading, isError };
};

export default useConnexionLogic;
