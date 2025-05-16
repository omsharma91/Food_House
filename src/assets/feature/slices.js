import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
    allProductData:[],
    cartData:[]
}

const cartSlice = createSlice({
    name:"productData",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const cartData = {
                id: nanoid(), 
                name: action.payload.name, 
                price: action.payload.price, 
                quantity: action.payload.quantity
            }
            const existing = state.cartData.find(i=>i.id===action.payload.id)
            if(existing)existing.quantity+=1
            else{
                state.cartData.push(cartData);
            }            
        },
        allProduct:(state,action)=>{
            state.allProductData = action.payload
        },
        increaseQty:(state,action)=>{
            const item = state.cartData.find(i=>i.id===action.payload)
            if(item)item.quantity+=1
        },
        decreaseQty:(state,action)=>{
            const item = state.cartData.find(i=>i.id===action.payload)
            if(item && item.quantity>1)item.quantity-=1
        },
        removeItem: (state, action) => {
            state.cartData = state.cartData.filter(i => i.id !== action.payload);
        }        
    }
})

export const {addToCart,allProduct,increaseQty,decreaseQty,removeItem} = cartSlice.actions;
export default cartSlice.reducer