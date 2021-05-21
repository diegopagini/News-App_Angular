import { createAction, props } from '@ngrx/store';

export const searchNew = createAction('[News] Search', props<{ data: any }>());
