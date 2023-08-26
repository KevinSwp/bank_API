import React from 'react';
import Navigation from '../../components/nav/Navigation'
import useProfilLogic from '../../hooks/logics/useProfilLogic';
import Footer from '../../components/footer/footer';

import './profil.scss';

function Profil() {
  const {
    user,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    handleEditName
  } = useProfilLogic();

  return (
    <div>
      <Navigation />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" />
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
