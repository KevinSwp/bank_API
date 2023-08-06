import React, {useEffect } from 'react';
import DisplayCounter from '../../components/displayCounter/displayCounter';
import Navigation from '../nav/Navigation';
import { useSelector } from 'react-redux';

function About() {

  const user = useSelector(state => state.user);

  useEffect(() => {

    fetch('api/1', { 
      method: 'GET',
      headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${user.token}`, 
      },
      // body: JSON.stringify({
      //   email : 'john.doe@gmail.com',
      //   password : 'asdasdasdasdasd'
      // })
  })
    .then(response => response.json())
 
  })

  return (
    <div className="counter-display">
      <Navigation />
      <DisplayCounter />
    </div>
  );
}

export default About;
