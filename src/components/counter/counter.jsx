import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../../reducers/counterReducer";

/**
 * Define a Counter function component
 */
function Counter() {
    // useDispatch returns the dispatch function from the Redux store that you use to dispatch actions
    const dispatch = useDispatch();

    // useSelector allows you to extract data from the Redux store state
    // Obtaining the current state value and assigning it to the `counter` variable
    const counterValue = useSelector(state => state.counter.value);

    return (
        <div>
            {/* Display the current counter value */}
            <h1>Counter: {counterValue}</h1>
            {/* When the "Increase" button is clicked, dispatch(envoyer l'action à la boutique Redux) an action with the type 'INCREMENT' */}
            <button onClick={() => dispatch(increment(100))}>Increase</button>
            {/* When the "Decrease" button is clicked, dispatch(envoyer l'action à la boutique Redux) an action with the type 'DECREMENT' */}
            <button onClick={() => dispatch(decrement({
                value: 2,
                text: "toto"
            }))}>Decrease</button>
        </div>
    )
}

export default Counter;
