import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Error from "../Error";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/authActions";

export default function Register(){

    const [customError,setCustomError] = useState(null)

    const {loading,userInfo,error,success} = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(()=>{
        if(success) navigate('/login')
    },[navigate,userInfo,success])

    const submitForm = (data)=>{

        if (data.password !== data.confirmPassword) {
            setCustomError('Password mismatch')
            return
        }

        data.email = data.email.toLowerCase()
    
        dispatch(registerUser(data))
    }

    return(
        <>
            <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            {customError && <Error>{customError}</Error>}
            <div className="col-md-8">
                <h3>Register User</h3>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">First Name</label>
                    <input type="text" className="form-control" {...register('firstName')} id="formGroupExampleInput2" placeholder="First Name"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Last Name</label>
                    <input type="text" className="form-control" {...register('lastName')} id="formGroupExampleInput2" placeholder="Last Name"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Age</label>
                    <input type="number" className="form-control" {...register('age')} id="formGroupExampleInput2" placeholder="Age"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="email" className="form-control" {...register('email')} id="formGroupExampleInput" placeholder="Email"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="password" className="form-control" {...register('password')} id="formGroupExampleInput2" placeholder="Password"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Confirm Password</label>
                    <input type="password" className="form-control" {...register('confirmPassword')} id="formGroupExampleInput2" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login
                    {loading ? <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : 'Register'
                    }
                    
                </button>
            </div>
            </form>
        </>
    );
}