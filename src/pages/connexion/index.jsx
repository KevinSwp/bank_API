import React, { useState } from 'react';
import Navigation from '../../components/layout/nav/Navigation'
import Footer from '../../components/layout/footer/footer';
import useConnexionLogic from '../../hooks/logics/useConnexionLogic';
import './connexion.scss';

/**
 * Defining the Home component
 */
function Connexion() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmit, isError } = useConnexionLogic(username, password);

  return (
    <div>
      <Navigation />
      <div className='connexion'>
        <div className='connexionForm'>
          {isError && <div className="error-alert">{isError}</div>}
          <form onSubmit={handleSubmit} className='form'>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
            </i><br />
            <h1>Sign In</h1><br />
            <label >Username</label>
            <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br />
            <label>Password</label><br />
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
            <input type="checkbox" /><label className="remember"> Remember me</label><br />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
