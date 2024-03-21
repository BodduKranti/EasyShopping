import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductcontroller } from '../ReduxController/controller'
import { toast } from 'react-toastify'
import { Truncate } from '@/app/utility/Truncate'


// getall Product thunk
export const getProductThunk = createAsyncThunk('getallProducts', getProductcontroller)

export interface productSliceDetails {
    productStore: any[],
    prodById: {},
    status: string,
    cartItems: any[],
    cartProdImg: string
}

const initialState: productSliceDetails = {
    productStore: [],
    prodById: {},
    status: '',
    cartItems: [],
    cartProdImg: ''
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        showLoading: (state, action) => {
            state.status = action.payload
        },
        addToCartItem: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state.cartProdImg = action.payload.prodThumb
            const check = state.cartItems.some((el: any) => el._id === action.payload._id)
            if (check) {
                const index = state.cartItems.findIndex((el: any) => el._id === action.payload._id);
                state.cartItems[index].prodQty = state.cartItems[index].prodQty + 1;
                state.cartItems[index].prodTotal = state.cartItems[index].prodQty * state.cartItems[index].prodPrice;
                toast.success(`You select ${state.cartItems[index].prodQty} Quantities in the ${Truncate(action.payload.prodTitle)} product`)
            }
            else {
                state.cartItems = [...state.cartItems, action.payload]
                toast.success(`${action.payload.prodTitle} added in to the cart successfully`)

                // state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1, total: action.payload.prodPrice }]
            }
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