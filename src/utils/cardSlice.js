import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:"cards",
    initialState:{
        NextApi:null,
        PrevApi:null,
        CardDetail:null,
    },
    reducers :{
        addNextApi:(state,action)=>{
            state.NextApi = action.payload;
        },
        addPrevApi:(state,action)=>{
            state.PrevApi = action.payload;
        },
        addCardDetail:(state,action)=>{
            state.CardDetail = action.payload;
        }
    }

})

export const {addNextApi,addPrevApi,addCardDetail} = cardSlice.actions;
export default cardSlice.reducer;