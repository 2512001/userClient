import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    logged: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.logged = true
        },
    }
})


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export const { setUser, setLoading, setError } = userSlice.actions;
