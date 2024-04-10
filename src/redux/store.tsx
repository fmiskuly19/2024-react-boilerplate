import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice.tsx'
import authReducer from './authSlice.tsx'

const store = configureStore({
   reducer: {
      themeSlice: themeReducer,
      authSlice: authReducer,
   },
})
export default store;

//this comes from the redux documentation
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch