const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: null,
        isLoading: true,
        isLogedIn: false,
        // isAuthenticated: false,
        // privateRoute: {
        //     authorized: false,
        // },
    },
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setIsLogedIn: (state) => {
            state.isLoading = false;
            state.isLogedIn = true;
        },
        setIsLogedOut: (state) => {
            state.isLoading = false;
            state.isLogedIn = false;
        },

        //  when use PrivateRoute component
        setPrivateRouteAuthorized: (state, action) => {
            state.privateRoute.authorized = action.payload;
        },
    }
});

export const { setIsLogedIn, setIsLogedOut, setPrivateRouteAuthorized } = userSlice.actions;
export default userSlice.reducer;