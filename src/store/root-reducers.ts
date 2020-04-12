import { combineReducers, Reducer } from 'redux';
import { StoreState } from './entities';
import home from './home/home.slice'

const rootReducer: Reducer<StoreState> = combineReducers({
  home
});

export default rootReducer;
