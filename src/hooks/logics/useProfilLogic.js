import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { saveUserDetails } from "../../reducers/userReducer";

const useProfilLogic = () => {
  // Accès aux données de l'utilisateur depuis le Redux store
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useState hook pour gérer l'état de visibilité d'un texte
  const [textVisible, setTextVisible] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleTextRemove = () => {
    setTextVisible(false);
  };

  const handleEditName = () => {
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          dispatch(saveUserDetails({
            firstName: data.body.firstName,
            lastName: data.body.lastName
          }));
        } else {
          console.error("Erreur lors de la mise à jour du profil :", data.message);
        }
      })
      .catch(error => {
        console.error("Erreur lors de l'envoi de la requête PUT:", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(saveUserDetails({
          firstName: data.body.firstName,
          lastName: data.body.lastName
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, dispatch]);

  return { user, textVisible, handleTextRemove, firstName, setFirstName, lastName, setLastName, handleEditName };
};

export default useProfilLogic;
