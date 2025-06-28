// AppStore.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

import SkillReducer from "./SkillSlice";
import ProjectReducer from "./ProjectSlice";

// Combine your reducers
const rootReducer = combineReducers({
  Skill: SkillReducer,
  Project: ProjectReducer,
});

// Configure persistence
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const AppStore = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(AppStore);

export default AppStore;
