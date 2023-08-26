import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../reducers/userReducer";

const useConnexionLogic = (userName, userPassword) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = userName;
    const password = userPassword;

    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        dispatch(
          saveToken({
            token: data.body.token,
            username: ``,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };

  useEffect(() => {
    if (user.token) {
      navigate("/profil");
    }
  }, [user, navigate]);

  return { handleSubmit, loading, error };
};

export default useConnexionLogic;
