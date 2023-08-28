import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { saveUserDetails } from "../../reducers/userReducer";

/**
 * Custom hook to manage the user's profile logic.
 */
const useProfilLogic = () => {
  // Access user data from the Redux store
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Local state management for firstName and lastName fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Local state for profile editing mode
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Handles updating the user's first name and last name.
   */
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
          // Update user details in the Redux store
          dispatch(saveUserDetails({
            firstName: data.body.firstName,
            lastName: data.body.lastName
          }));
          console.log("User name updated!");
      } else {
        console.error("Failed to update", data.message);
        }
      })
      .catch(error => {
        console.error("Error PUT request:", error);
      });
  };

  // Fetch user details on component mount
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update user details in the Redux store
        dispatch(saveUserDetails({
          firstName: data.body.firstName,
          lastName: data.body.lastName
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, dispatch]);

  return { user, firstName, setFirstName, lastName, setLastName, handleEditName, isEditing, setIsEditing };
};

export default useProfilLogic;
