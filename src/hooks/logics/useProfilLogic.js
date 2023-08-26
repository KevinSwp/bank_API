import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useProfilLogic = () => {
  // Accessing the user data from the Redux store
  const user = useSelector((state) => state.user);

  // useState hook to manage the visibility state of a text
  const [textVisible, setTextVisible] = useState(true);

  const handleTextRemove = () => {
    setTextVisible(false);
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return { user, textVisible, handleTextRemove };
};

export default useProfilLogic;
