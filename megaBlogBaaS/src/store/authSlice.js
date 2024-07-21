import { createSlice } from "@reduxjs/toolkit";//folder  structure apni shauliyat kk hisaab se rakhte h

const initialState={
    status:false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData
        },
        logout:(state)=>{//yaha bhi action ka access hai lekin zaurat nhi hai
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;