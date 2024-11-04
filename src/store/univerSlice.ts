import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const readUnivers = createAsyncThunk(
    "univer/readUnivers",
    async (_,{rejectWithValue}) => {
        try {
            const response = await 
        }catch (error) {

        }
    }
)




const univerSlice = createSlice({
    name: "univer",
    initialState: {
        univer: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase()
    },
})


