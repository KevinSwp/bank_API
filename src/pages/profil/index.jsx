import React from 'react';
import Navigation from '../../components/nav/Navigation'
import useProfilLogic from '../../hooks/logics/useProfilLogic';
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

  return (
    <div>
      <Navigation />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
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
