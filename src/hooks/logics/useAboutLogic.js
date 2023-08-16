import { useSelector } from 'react-redux';
import { useState } from 'react';

const useAboutLogic = () => {
    // Accessing the user data from the Redux store
    const user = useSelector(state => state.user);

    // useState hook to manage the visibility state of a text
    const [textVisible, setTextVisible] = useState(true);

    const handleTextRemove = () => {
        setTextVisible(false);
    }

    return { user, textVisible, handleTextRemove };
};

export default useAboutLogic;
