// rootReducer.ts
import { combineReducers } from 'redux';
import authReducer from './auth.reducer';

interface RootState {
  auth: {
    user: string;
    token: null;
  } | undefined;
  // Add other reducers as needed
}

export const rootReducer = combineReducers<RootState>({
  auth: authReducer as any, // This is a workaround, you may need to adjust your reducer types
  // Add other reducers as needed
});
