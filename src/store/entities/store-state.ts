import { HomeState } from '../home';

export interface WithHomeState {
  home: HomeState;
}

export interface StoreState extends WithHomeState {}
