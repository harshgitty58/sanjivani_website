import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TravelTypeState {
    value:string;
}

const initialState:TravelTypeState = {
    value:'cab'
}

const travelTypeSlice = createSlice({
    name:'travelType',
    initialState,
    reducers:{
        setTravelType(state,action:PayloadAction<string>){
            state.value = action.payload;
        }
    } 
}  
);

export const {setTravelType} = travelTypeSlice.actions;
export default travelTypeSlice.reducer;