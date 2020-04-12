import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState } from './entities/home-state';

const initialState: HomeState = {
  avatar: '',
  title: 'Russel Crowe',
  subtitle: ['Web Design', 'Web Development', 'MERN Stack']
}

const updateHomeSuccess = (state: HomeState, action: PayloadAction<HomeState>): void => {
  state = { ...action.payload }
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateHomeSuccess
  }
});

const { actions, name, reducer } = homeSlice;

export { actions, name };
export default reducer;
