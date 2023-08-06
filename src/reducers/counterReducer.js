import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value : 0
  },
  reducers: {
    increment: (state, action) => {
        state.value = state.value + action.payload
    },
    decrement: (state, action) => {
        state.value = state.value - action.payload.value
        console.log(action.payload.text)
    }
  },
}); 

export const { increment, decrement } = counter.actions;

export default counter.reducer;




// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export default counterReducer;
