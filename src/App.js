import React, { useEffect } from 'react'
import Router from './router'
import { useDispatch } from "react-redux";
import { saveToken } from './reducers/userReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      dispatch(
        saveToken({
          token: token,
          username: ``,
        })
      );
    }
  }, [dispatch])

  return (<>
    <Router />
  </>)
}

export default App;
