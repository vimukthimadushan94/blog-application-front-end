import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    categories : [],
    isLoading : false,
    error: null,
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async ()=>{
        const res = await axios('http://localhost:8080/api/category')
        const data = await res.data
        console.log(data)
        return data
    }
)

export const createCategories = createAsyncThunk(
    'categories/create',
    async (category) => {
        try{
            const payload = await fetch('http://localhost:8080/api/category',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name:category})
            })
            .then(response =>response.json())
            .then(data=>{return data})
            .catch(error => {
                console.log('Error',error)
            })
            console.log(payload)
            return payload
    
        }catch{
            console.log("error...")
        }
    }   
)

export const deletCategories = createAsyncThunk(
    'categories/delete',
    async (category_id)=>{
        console.log('cat_id'+category_id)
        try{
            const payload = await fetch('http://localhost:8080/api/category/'+category_id,{
                method:"DELETE",
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            .then(response =>response.json())
            .then(data=>{return data})
            .catch(error => {
                console.log('Error',error)
            })
            return payload
    
        }catch{
            console.log("error...")
        }
    }
);

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchCategories.pending,(state)=>{
            state.isLoading = true
        })

        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.isLoading = false
            state.categories = action.payload
        })

        builder.addCase(fetchCategories.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        })

        builder.addCase(createCategories.fulfilled,(state,action)=>{
            console.log(state.categories)
            state.categories.push(action.payload)
        })

        builder.addCase(deletCategories.fulfilled,(state,action)=>{
            console.log(action.payload.id)
            console.log(state.categories)
            state.categories = state.categories.filter((item)=>{
                console.log(item.id!==action.payload.id)
                return item.id!==action.payload.id
            })
        })
    }
})

export const {addCategory} = categorySlice.actions
export default categorySlice.reducer