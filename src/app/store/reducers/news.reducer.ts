import { createReducer, on } from '@ngrx/store';
import { searchNew, responseFromService } from '../actions/news.actions';

const initialState = {
  data: {},
  listOfNews: [],
  loading: false,
};

const _newsReducer = createReducer(
  initialState,
  on(searchNew, (state, { data }) => ({
    ...state,
    loading: true,
    data: data,
  })),
  on(responseFromService, (state, { response }) => ({
    ...state,
    loading: false,
    listOfNews: [...state.listOfNews, response],
  }))
);

export function newsReducer(state, action) {
  return _newsReducer(state, action);
}
