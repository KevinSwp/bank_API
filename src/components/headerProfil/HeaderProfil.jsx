import React from 'react';
import useProfilLogic from '../../hooks/logics/useProfilLogic';

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
