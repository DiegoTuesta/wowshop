import { createSlice } from '@reduxjs/toolkit';
// import { isLoading } from './loader.slice'
// import axios from 'axios';
// import { setToken} from './token.slice';


export const userSlice = createSlice({
    name: 'user',
    initialState: "",
    reducers: {
        
    }
})

export const {  } = userSlice.actions;

export default userSlice.reducer;


// export const loginThunk = (data) => dispatch => {
//     dispatch(isLoading(true))
//     axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`, data)
//     .then(res => {
//         dispatch(setToken(res.data.token))
//         console.log(res.data.token)
//     })
//     .catch(console.log)
//     .finally(() => dispatch(isLoading(false)))
// }



