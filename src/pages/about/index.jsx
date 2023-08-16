import React from 'react';
import Navigation from '../../components/nav/Navigation'
import useAboutLogic from '../../hooks/logics/useAboutLogic';
import Footer from '../../components/footer/footer';
// import DisplayCounter from '../../components/displayCounter/DisplayCounter';


const handleChangeUserInformations = () => {
  fetch('http://localhost:3001/api/user/profile', {
    method : 'PUT',
    body: {}
  })
  .then(response => response.json())
  .then(data => {

  })
  .catch(error => {
      console.error("Erreur lors de la récupération du token:", error);
  });
}

/**
 * Defining the About component
 */
function About() {
  const { user, textVisible, handleTextRemove } = useAboutLogic();

  return (
    <div>
      <Navigation />

      {/* Conditionally rendering content based on the user's token presence */}
      {user.token &&
        <>
          {/* Conditionally displaying a text if textVisible is true */}
          {textVisible &&
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Quaerat quasi tempore ea praesentium optio qui minima ipsam distinctio ab <br />
              repudiandae dolore itaque, animi vero nisi aspernatur adipisci possimus explicabo eveniet?</p>
          }
          <button onClick={handleTextRemove}>Effacer</button>
        </>
      }

      {/* <DisplayCounter /> */}


      <form >
        <input type="text" name="username" id="username" placeholder="prenom"/>
        <input type="text" name="username" id="username" placeholder="nom"/>        
        <button type="submit" onClick={handleChangeUserInformations}>Modifier</button>
      </form>
      <Footer />
    </div>
  );
}

export default About;
