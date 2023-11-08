import React, { useEffect } from 'react';
import useProfilLogic from '../../hooks/logics/useProfilLogic';
import { useDispatch } from "react-redux";
import { saveUserDetails } from "../../reducers/userReducer";

function HeaderProfil() {
  const {
    user,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    handleEditName,
    isEditing,
    setIsEditing
  } = useProfilLogic();
  
  const dispatch = useDispatch();

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
  }, [dispatch, user.token]);

  return (
    <div className="header">
      <h1>Welcome back<br />
        {
          isEditing ? (
            <>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
            </>
          ) : (
            `${user.firstName} ${user.lastName}`
          )
        }!
      </h1>

      {
        isEditing ? (
          <>
            <button className="edit-button" onClick={() => {
              handleEditName();
              setIsEditing(false);  // turn off editing mode after saving
            }}>Save</button>
            <button className="cancel-button" onClick={() => {
              // Reset the input values to the initial ones if needed
              setFirstName(user.firstName);
              setLastName(user.lastName);
              setIsEditing(false); // turn off editing mode
            }}>Cancel</button>
          </>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
        )
      }
    </div>
  );
}

export default HeaderProfil;
