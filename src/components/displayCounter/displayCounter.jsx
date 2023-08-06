import { useSelector } from 'react-redux';

/**
 * Define a DisplayCounter function component
 */
function DisplayCounter() {
    // useSelector is a hook that allows you to extract data from the Redux store state
    // obtaining the current state value and assigning it to the `counter` variable
    const counterValue = useSelector(state => state.counter.value);

    return (
        <div>
            {/* Display the current counter value */}
            <h1>{counterValue}</h1>
        </div>
    )
}

export default DisplayCounter;
