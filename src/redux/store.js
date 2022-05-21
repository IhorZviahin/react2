import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {episodeReduser} from "./slices/episode.slice";

const rootRedusers = combineReducers({
   episodes:episodeReduser
});

const store = configureStore({
   reducer:rootRedusers
});

export {store}