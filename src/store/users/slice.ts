import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Angel Garcia',
    email: 'angel.garcia@gmail.com',
    github: 'angelcgar',
  },
  {
    id: '2',
    name: 'Jon Mueller',
    email: 'jon.mueller@gmail.com',
    github: 'jonmuell',
  },
  {
    id: '3',
    name: 'Peter Federer',
    email: 'peter.federer@gmail.com',
    github: 'midudev',
  },
  {
    id: '4',
    name: 'Maxime Bujet',
    email: 'maxime.bujet@gmail.com',
    github: 'peral',
  },
  {
    id: '5',
    name: 'Emma Nelly',
    email: 'emma.nelly@gmail.com',
    github: 'emmanuelnelly',
  },
];

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UsersWithId extends User {
  id: UserId;
}

const initialState: UsersWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    rollbackUser: (state, action: PayloadAction<UsersWithId>) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id,
      );
      if (!isUserAlreadyDefined) {
        state.push(action.payload);
      }
    },
  },
});

export default userSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions;
