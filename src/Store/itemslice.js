import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const itemSlice = createSlice({
    name: 'displayitems',
    initialState: {
        items: [],
        isLoading: false,
        isError: null,
        isAddSuccess: false,
        isDeleteSuccess: false,
        isUpdateSuccess: false,
        searchValue:""
    },
    reducers: {
        clearStore(state) {
            return {
                ...state,
                isLoading: false,
                isError: null,
                isAddSuccess: false,
                isDeleteSuccess: false,
                isUpdateSuccess: false
            }
        },
        searchFunction(state, action) {
           state.searchValue=action.payload
        }

    },
    extraReducers: (data) => {
        data.addCase(fetchitems.pending, (state, action) => {
            state.isLoading = true
        })
        data.addCase(fetchitems.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message
        })
        data.addCase(fetchitems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        })
        data.addCase(deleteItem.pending, (state, action) => {
            state.isLoading = true;
        })
        data.addCase(deleteItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isDeleteSuccess = true;
        })
        data.addCase(deleteItem.rejected, (state, action) => {
            state.isDeleteSuccess = false;
            state.isError = true;
        })
        data.addCase(addItem.pending, (state, action) => {
            state.isLoading = true;
        })
        data.addCase(addItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAddSuccess = true;
        })
        data.addCase(addItem.rejected, (state, action) => {
            state.isDeleteSuccess = false;
            state.isError = true;
        })
        data.addCase(updateItem.pending, (state, action) => {
            state.isLoading = true;
        })
        data.addCase(updateItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUpdateSuccess = true;
        })
        data.addCase(updateItem.rejected, (state, action) => {
            state.isUpdateSuccess = false;
            state.isError = true;
        })
    }
})

export const fetchitems = createAsyncThunk('fetchitems', async () => {
    let resp = await axios.get("https://65ae82741dfbae409a74fde3.mockapi.io/items");

    console.log("resp", resp.data);
    return resp.data;
})
export const deleteItem = createAsyncThunk('deleteitem', async (id) => {
    let resp = await axios.delete(`https://65ae82741dfbae409a74fde3.mockapi.io/items/${id}`);
    console.log("resp", resp);
    return resp
})
export const addItem = createAsyncThunk('additem', async (body) => {
    let resp = await axios.post("https://65ae82741dfbae409a74fde3.mockapi.io/items", body);
    console.log("resp", resp);
    return resp
})
export const updateItem = createAsyncThunk('update', async (body) => {
    console.log(body);
    let resp = await axios.put(`https://65ae82741dfbae409a74fde3.mockapi.io/items/${body.id}`, { itemname: body.itemname });
    console.log("resp", resp);
    return resp
})

export const { clearStore,searchFunction } = itemSlice.actions
export default itemSlice.reducer