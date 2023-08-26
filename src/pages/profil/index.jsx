import React from 'react';
import { useState } from "react";
import Navigation from '../../components/nav/Navigation'
import { useDispatch } from "react-redux";
import useProfilLogic from '../../hooks/logics/useProfilLogic';
import { saveUserDetails } from '../../reducers/userReducer';
import Footer from '../../components/footer/footer';

import './profil.scss';

// const handleChangeUserInformations = () => {
//   fetch('http://localhost:3001/api/user/profile', {
//     method : 'PUT',
//     body: {}
//   })
//   .then(response => response.json())
//   .then(data => {

//   })
//   .catch(error => {
//       console.error("Erreur lors de la récupération du token:", error);
//   });
// }

/**
 * Defining the Profil component
 */
function Profil() {
  const { user } = useProfilLogic();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const handleEditName = () => {
  // Vérifiez les entrées si nécessaire

  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}` // si votre API nécessite un token pour cette requête
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Mise à jour du Redux store avec les nouvelles données
      dispatch(saveUserDetails({
        firstName: data.body.firstName,
        lastName: data.body.lastName
      }));
    } else {
      // Gérez les erreurs de l'API ici
      console.error("Erreur lors de la mise à jour du profil :", data.message);
    }
  })
  .catch(error => {
    console.error("Erreur lors de l'envoi de la requête PUT:", error);
  });
}


  return (
    <div>
      <Navigation />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
          <button className="edit-button">Edit Name</button>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Prénom"
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nom"
          />

          <button className="edit-button" onClick={handleEditName}>Edit Name</button>
        </div>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Profil;
