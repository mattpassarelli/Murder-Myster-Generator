import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

interface MotivesState {
  value: Array<String>;
}

const initialState: MotivesState = {
  value: [],
};

export const motiveSlice = createSlice({
  name: 'motive',
  initialState,
  reducers: {
    addMotive: (state, action) => ({value: action.payload}),
    removeMotive: (state, action) => ({value: action.payload})
  }
})

export const { addMotive, removeMotive} = motiveSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getMotives = (state: RootState) => state.motives.value;


export default motiveSlice.reducer;
