import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { saveUserDetails } from "../../reducers/userReducer";

const useProfilLogic = () => {
  // Accessing the user data from the Redux store
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // useState hook to manage the visibility state of a text
  const [textVisible, setTextVisible] = useState(true);

  const handleTextRemove = () => {
    setTextVisible(false);
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
        console.log(data.body);
        dispatch(saveUserDetails({
          firstName: data.body.firstName, 
          lastName: data.body.lastName
        }));
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, dispatch]);

  return { user, textVisible, handleTextRemove };
};

export default useProfilLogic;
