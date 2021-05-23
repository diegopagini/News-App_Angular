import { createAction, props } from '@ngrx/store';

export const searchNew = createAction('[News] Search', props<{ data: any }>());

export const responseFromService = createAction(
  '[News] Service Response',
  props<{ response: any }>()
);
