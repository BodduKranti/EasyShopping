import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductcontroller } from '../ReduxController/controller'


// getall Product thunk
export const getProductThunk = createAsyncThunk('getallProducts', getProductcontroller)

export interface productSliceDetails {
    productStore: any[],
    prodById: {},
    status: string,
    cartItems: any[]
}

const initialState: productSliceDetails = {
    productStore: [],
    prodById: {},
    status: '',
    cartItems: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        showLoading: (state, action) => {
            state.status = action.payload
        },
        addToCartItem: (state, action: PayloadAction<any>) => {
            state.cartItems = [...state.cartItems, action.payload]
            console.log(state.cartItems)
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

export const { showLoading, addToCartItem } = productSlice.actions
export default productSlice.reducer