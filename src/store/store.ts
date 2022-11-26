import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({

})

export const stetupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof stetupStore>
export type AppDispatch = AppStore['dispatch']
