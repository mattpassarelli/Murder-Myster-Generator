import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

interface CharacterState {
  value: Array<String>;
}

const initialState: CharacterState = {
  value: [],
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addCharacter: (state, action) => ({value: action.payload}),
    removeCharacter: (state, action) => ({value: action.payload})
  }
})

export const { addCharacter, removeCharacter} = characterSlice.actions;

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
export const getCharacters = (state: RootState) => state.characters.value;


export default characterSlice.reducer;
