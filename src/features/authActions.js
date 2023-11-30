import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const backendURL = process.env.API_URL

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data,{rejectWithValue}) => {
        try {
            const config = {
              headers: {
                'Content-Type': 'application/json',
              },
            }
      
            await axios.post(
              `http://localhost:8080/api/register`,
              data,
              config
            )
        } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
        }
    }
)

export  const userLogin = createAsyncThunk(
  'auth/login',
  async({email,password},{rejectWithValue})=>{
    try{
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
  
        const { data } = await axios.post(
          `http://localhost:8080/api/login`,
          { email, password },
          config
        )
  
        // store user's token in local storage
        localStorage.setItem('userToken', data.token)
        return data
    }catch(error){
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)