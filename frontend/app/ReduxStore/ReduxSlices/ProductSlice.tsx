import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductcontroller } from '../ReduxController/controller'


// getall Product thunk
export const getProductThunk = createAsyncThunk('getallProducts', getProductcontroller)

export interface productSliceDetails {
    productStore: [],
    prodById: {},
    status: string
}

const initialState: productSliceDetails = {
    productStore: [],
    prodById: {},
    status: ''
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        showLoading: (state, action) => {
            state.status = action.payload
        }
    },
    extraReducers: (build) => {
        build
            .addCase(getProductThunk.pending, (state, action: PayloadAction<any>) => {
                state.status = "Pending"
            })
            .addCase(getProductThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.productStore = action.payload
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})

export const { showLoading } = productSlice.actions
export default productSlice.reducer