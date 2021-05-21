import { createReducer, on } from '@ngrx/store';
import { searchNew } from '../actions/news.actions';

const initialState = {
  news: {},
};

const _newsReducer = createReducer(
  initialState,
  on(searchNew, (state, { data }) => ({
    ...state,
    news: data,
  }))
);

export function newsReducer(state, action) {
  return _newsReducer(state, action);
}
