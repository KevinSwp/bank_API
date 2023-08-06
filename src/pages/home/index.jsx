import React, {useEffect } from 'react';
import Navigation from '../nav/Navigation';
import Counter from '../../components/counter/counter';
import { useDispatch, useSelector } from 'react-redux';
import { saveToken } from "../../reducers/userReducer";

function Home() {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
      // simule la demande de connexion avec le mot de passe et username et sauvegarde le token dans redux
      fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(response => response.json())
        .then(data => {
            dispatch(saveToken({
              token : data[0],
              username : 'john'
            }))
        })
        .catch(error => {

        })
  }, [])


  const handleSubmit = (event) => {
      event.preventDefault();

      console.log('handleSubmit')
      // 1) recuperer le username + password
      // 2) faire le fetch pour recuperer le token en envoyant username + password
      // 3) sauvegarder le token dans redux s'il est OK et sans erreur
  }


  return (
    <div className="home">

      <p>Username : {user.username}</p>
      <p>Token : {user.token}</p> 


      <form>
        <input type="text" name="username" id="username" value="john.doe@gmail.com"/>
        <input type="password" name="password" id="password" value="myPassword"/>
        <button onClick={handleSubmit}>Envoyer</button>
      </form>  


      <Navigation />
      <Counter />
    </div>
  );
}

export default Home;
