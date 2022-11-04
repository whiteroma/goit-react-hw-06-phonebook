import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts(state, action) {state.filter = action.payload}
    }
})

export default filterSlice.reducer;
export const {filterContacts} = filterSlice.actions
console.log("filterContacts", filterContacts);

